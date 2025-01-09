import React from "react";
import { client } from "@/sanity/lib/client";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

export interface FullProduct {
  _id: string;
  images: string[];
  name: string;
  price: number;
  description: string;
  slug: string;
  categoryName: string;
  reviewStar: number;
}

async function fetchProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    images[] { asset->{ url } },
    name,
    price,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    reviewStar,
  }`;

  const data = await client.fetch(query);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const images = data?.images?.map((img: any) => img.asset.url) || [];

  return {
    ...data,
    images,
    price: data?.price || 0,
  };
}

async function ProductPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = await params;
  const product: FullProduct = await fetchProduct(slug);

  const discountedPrice = product.price - 500;

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 mt-16 mb-16">
      {" "}
      <div className="grid gap-8 md:grid-cols-2">
        {product.images.length > 0 ? (
          <ImageGallery slugs={[product.slug]} />
        ) : (
          <div>No images available</div>
        )}

        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {product.categoryName}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
              {product.name}
            </h2>
          </div>
          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-2">
              <span className="text-sm">{product.reviewStar}</span>{" "}
              <Star className="w-5 h-5" />
            </Button>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">
                Rs {discountedPrice}
              </span>
              <span className="mb-0.5 line-through">Rs {product.price}</span>
            </div>
            <span className="text-sm text-gray-500">
              Inclusive of all taxes
            </span>
          </div>
          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <Truck className="w-6 h-6" />
            <span className="text-sm">2-4 Day Shipping</span>
          </div>
          <div className="flex gap-2.5">
            <Button>Add to Cart</Button>
            <Button variant={"secondary"}>Buy Now</Button>
          </div>
          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
