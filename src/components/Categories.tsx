import React from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

async function fetchCategoryImages() {
  const data = await client.fetch(
    `*[_type == "categoriesImage"]{
      image1,
      image2,
      image3
    }[0]`
  );
  return data;
}

export default async function Categories() {
  const categories = await fetchCategoryImages();

  if (!categories) {
    return <div>Loading categories...</div>;
  }

  const categoryData = [
    { title: "Men", image: categories.image1 },
    { title: "Women", image: categories.image2 },
    { title: "Kids", image: categories.image3 },
  ];

  return (
    <div className="mb-20 mt-20">
      <div className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold mb-4">Categories</h1>
        <div className="flex justify-center">
          <div className="w-16 h-1 rounded-full bg-primary" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {categoryData.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <div className="relative overflow-hidden">
              <Image
                src={urlFor(category.image).url()}
                alt={category.title}
                width={350}
                height={350}
                className="w-full h-80 rounded-xlobject-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3">
                <h2 className="text-white text-center uppercase font-semibold">
                  {category.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
