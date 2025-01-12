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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

async function fetchProducts(category: string) {
  const query = `*[_type == "product" && category == $category]{
    name,
    price,
    images[0],
    category,
    "slug": slug.current
  }`;
  const products = await client.fetch(query, { category });
  return products;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const products = await fetchProducts(category);

  if (!products || products.length === 0) {
    return <div>No products found for {category}.</div>;
  }

  return (
    <div className="mb-20 mt-20">
      <div className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold mb-4">
          Our Best Products for {category}
        </h1>
        <div className="flex justify-center">
          <div className="w-16 h-1 rounded-full bg-primary" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {products.map((product: any) => (
          <Card
            key={product.slug}
            className="w-full max-w-sm shadow-lg border rounded-lg"
          >
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
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-lg">
                Rs {product.price}
                <span className="line-through text-gray-400 ml-2">
                  Rs {product.price + 5000}
                </span>
              </p>
            </CardContent>
            <CardFooter className="p-4">
              <Link href={`/product/${product.category}/${product.slug}`}>
                <Button>See Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
