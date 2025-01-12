/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageGalleryProps {
  slugs: string[];
}

async function fetchImages(slugs: string[]) {
  const query = `*[_type == "product" && slug.current in ${JSON.stringify(
    slugs
  )}]{
    images[] { asset->{ url } },
    "slug": slug.current
  }`;

  const data = await client.fetch(query);

  const images = data.flatMap((product: any) =>
    product.images?.map((img: any) => img.asset.url)
  );

  return {
    images: images.filter(Boolean),
  };
}

function ImageGallery({ slugs }: ImageGalleryProps) {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [bigImage, setBigImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImages(slugs);
      setGalleryImages(data.images);
      setBigImage(data.images.length > 0 ? data.images[0] : null);
    };

    fetchData();
  }, [slugs]);

  const handleSmallImageClick = (image: string) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {galleryImages.length > 0 ? (
          galleryImages.map((imageUrl, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg bg-gray-100 cursor-pointer ${
                bigImage === imageUrl ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleSmallImageClick(imageUrl)}
            >
              <Image
                src={imageUrl}
                width={320}
                height={240}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover rounded-lg object-center"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No images available</p>
        )}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        {bigImage ? (
          <Image
            src={bigImage}
            alt="Main Image"
            width={420}
            height={360}
            priority
            className="h-full w-full object-cover object-center rounded-lg"
          />
        ) : (
          <p className="flex items-center justify-center h-full text-gray-500">
            No image selected
          </p>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
