/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  image: any;
  currency: string;
}

function AddToCard({ name, description, price, image, currency }: ProductCart) {
  const { addItem } = useShoppingCart();

  const product = {
    id: name.replace(/\s+/g, "-").toLowerCase(),
    name: name,
    description: description,
    price: price * 100,
    image: urlFor(image).url(),
    currency: currency,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
      }}
    >
      Add To Cart
    </Button>
  );
}

export default AddToCard;
