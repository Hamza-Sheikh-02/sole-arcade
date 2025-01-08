"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { Button } from "./ui/button";

const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

function Hero() {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "heroImage"]{image1}[0]')
      .then((data) => {
        if (data && data.image1) {
          setHeroImage(data.image1);
        }
      })
      .catch((err) => console.error("Error fetching hero image:", err));
  }, []);

  if (!heroImage) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${urlFor(heroImage).url()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Shop the Best Sneakers
          </h1>
          <p className="mb-5 text-white">
            Explore our wide collection of sneakers, from classic styles to the
            latest releases. Whether you&apos;re hitting the gym or hitting the
            streets, we&apos;ve got the perfect pair for you.
          </p>
          <Button className="btn btn-primary">Shop Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
