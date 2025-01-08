import React from "react";
import { ShoppingBag } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";

function Services() {
  return (
    <section className="text-gray-600 body-font dark:text-foreground dark:bg-background">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-primary mb-4">
            Our Sneaker Collections
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-secondary text-primary mb-5 flex-shrink-0">
              <GiRunningShoe className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 dark:text-primary text-lg title-font font-medium mb-3">
                Latest Releases
              </h2>
              <p className="leading-relaxed text-base dark:text-muted-foreground">
                Discover the newest trends in sneakers, combining comfort and
                style for every occasion.
              </p>
              <a className="mt-3 text-primary inline-flex items-center">
                Shop Now
                <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-secondary text-primary mb-5 flex-shrink-0">
              <FaStar className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 dark:text-primary text-lg title-font font-medium mb-3">
                Top Rated
              </h2>
              <p className="leading-relaxed text-base dark:text-muted-foreground">
                Browse our customer favorites and highly-rated sneakers loved by
                sneaker enthusiasts.
              </p>
              <a className="mt-3 text-primary inline-flex items-center">
                Explore
                <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-secondary text-primary mb-5 flex-shrink-0">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 dark:text-primary text-lg title-font font-medium mb-3">
                Exclusive Deals
              </h2>
              <p className="leading-relaxed text-base dark:text-muted-foreground">
                Get access to exclusive offers and discounts on premium
                sneakers.
              </p>
              <a className="mt-3 text-primary inline-flex items-center">
                View Offers
                <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
        <Button className="flex mx-auto mt-16 text-white bg-primary dark:text-black dark:bg-white border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-200 rounded text-lg">
          Shop Now
        </Button>
      </div>
    </section>
  );
}

export default Services;
