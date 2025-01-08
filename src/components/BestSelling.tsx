/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

async function fetchProducts() {
  const query = `*[_type == "product"]{
    name,
    price,
    images[0],
    category
  }`;
  const products = await client.fetch(query);
  return products;
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="w-full max-w-sm shadow-lg border rounded-lg">
      <CardHeader className="p-4">
        <Image
          src={urlFor(product.images).url()}
          alt={product.name}
          width={350}
          height={350}
          className="rounded-lg object-cover w-full h-64"
        />
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-red-500 font-bold">Best Seller</p>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">
          Category: {product.category}
        </p>{" "}
        <br />
        <p className="text-lg">
          Rs {product.price}
          <span className="line-through text-gray-400 ml-2">
            Rs {product.price + 5000}
          </span>
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="">See Details</Button>
      </CardFooter>
    </Card>
  );
}

export default async function BestSelling() {
  const products = await fetchProducts();

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="mb-20 mt-20">
      <div className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold mb-4">
          Our Best Selling Products
        </h1>
        <div className="flex justify-center">
          <div className="w-16 h-1 rounded-full bg-primary" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {products.map((product: any, index: any) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
