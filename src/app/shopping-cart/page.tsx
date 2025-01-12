"use client";

import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const ShoppingCart: React.FC = () => {
  const {
    cartDetails = {},
    cartCount = 0,
    formattedTotalPrice,
    removeItem,
  } = useShoppingCart();

  const cartItems = Object.values(cartDetails);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-6 md:py-16 md:px-12 flex items-center justify-center">
      <div className="max-w-[1440px] w-full bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Your Shopping Cart
        </h2>
        {cartCount > 0 ? (
          <>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm md:text-base text-gray-600 dark:text-gray-400 border-b">
                  <th className="py-4">Product</th>
                  <th className="py-4 text-center">Quantity</th>
                  <th className="py-4 text-right">Total</th>
                  <th className="py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="border-b" key={item.id}>
                    <td className="py-6 flex items-center">
                      <Image
                        src={item.image || "favicon.ico"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                      <div className="ml-4">
                        <h3 className="text-sm md:text-base font-medium dark:text-gray-100">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {item.price / 100} {item.currency}
                        </p>
                      </div>
                    </td>
                    <td className="py-6 text-center dark:text-gray-200">
                      {item.quantity}
                    </td>
                    <td className="py-6 text-right text-gray-800 dark:text-gray-200 font-medium">
                      {(item.price * item.quantity) / 100} {item.currency}
                    </td>
                    <td className="py-6 text-right">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        aria-label={`Remove ${item.name}`}
                      >
                        <MdDelete size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex flex-col md:flex-row items-end justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Taxes and shipping are calculated at checkout.
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Subtotal: {formattedTotalPrice}
                </p>
                <button className="bg-indigo-500 dark:bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-700 transition mt-4">
                  Go to checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
