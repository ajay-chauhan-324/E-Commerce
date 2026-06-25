import React from "react";
import { Link } from "react-router-dom";

function CartRaw2() {
  
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <Link
        to="/product/imac"
        className="block overflow-hidden rounded-2xl bg-gray-50 p-4"
      >
        <img
          className="mx-auto h-44 w-44 object-contain transition-transform duration-300 group-hover:scale-105"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
          alt="iMac"
        />
      </Link>

      <div className="mt-5">
        <Link
          to="/product/imac"
          className="text-xl font-bold text-gray-900 transition hover:text-blue-600"
        >
          iMac 27”
        </Link>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          This generation has some improvements, including a longer
          continuous battery life.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-sm text-gray-400 line-through">
          $399.99
        </p>

        <p className="text-2xl font-bold text-blue-600">
          $299
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-200 bg-pink-50 text-pink-600 transition hover:bg-pink-100"
        >
          ❤️
        </button>

        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
            />
          </svg>

          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default CartRaw2;