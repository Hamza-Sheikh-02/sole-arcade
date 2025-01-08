import React from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

async function fetchPromotions() {
  const data = await client.fetch(
    `*[_type == "promotionImages"]{
      image1,
      image2
    }[0]`
  );
  return data;
}

export default async function Promotion() {
  const promotions = await fetchPromotions();

  if (!promotions) {
    return <div>Loading promotions...</div>;
  }

  return (
    <div className="mb-20 mt-20">
      <div className="text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
          Exclusive Sneaker Deals
        </h1>
        <div className="flex justify-center">
          <div className="w-16 h-1 rounded-full bg-primary" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div
          className="hero h-80 rounded-lg overflow-hidden relative bg-card text-card-foreground"
          style={{
            backgroundImage: `url(${urlFor(promotions.image1).url()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="hero-content flex flex-col items-center justify-center relative z-10">
            <h1 className="text-3xl text-white font-bold tracking-wide uppercase">
              Get 20% Off
            </h1>
            <p className="mt-3 text-center text-lg text-white">
              Use code <span className="font-bold">SNEAKER20</span> at checkout
              to save 20% on all running shoes. Offer valid until January 31st!
            </p>
          </div>
        </div>
        <div
          className="hero h-80 rounded-lg overflow-hidden relative bg-card text-card-foreground"
          style={{
            backgroundImage: `url(${urlFor(promotions.image2).url()})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="hero-content flex flex-col items-center justify-center relative z-10">
            <h1 className="text-3xl font-bold tracking-wide uppercase text-white">
              Free Shipping
            </h1>
            <p className="mt-3 text-center text-lg text-white">
              Enjoy free shipping on orders over $100. No code needed—just add
              your favorite sneakers to the cart and save big!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
