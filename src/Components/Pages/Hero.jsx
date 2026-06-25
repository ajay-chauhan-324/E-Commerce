import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 w-fit rounded-full border border-orange-200 bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
            🔥 Limited Time Offer
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Up to <span className="text-orange-500">50% OFF</span>
            <br />
            On Your Favorite Products
          </h1>

          <p className="mb-8 max-w-xl text-lg text-gray-600">
            Don't wait! Explore premium collections with unbeatable prices and
            exclusive discounts available for a limited time.
          </p>

          <div className="flex gap-4">
            <Link
              to="/shop"
              className="rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-600"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-700 transition duration-300 hover:border-orange-500 hover:text-orange-500"
            >
              Explore Products
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">10K+</h2>
              <p className="text-gray-500">Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">500+</h2>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">4.9★</h2>
              <p className="text-gray-500">Ratings</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-14 flex justify-center lg:mt-0">
          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-orange-200 blur-3xl"></div>

            <img
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
              alt="shopping"
              className="relative z-10 w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 py-10 text-lg font-semibold text-gray-500">
          <Link to="/" className="transition hover:text-orange-500">
            Nike
          </Link>

          <Link to="/" className="transition hover:text-orange-500">
            Adidas
          </Link>

          <Link to="/" className="transition hover:text-orange-500">
            Puma
          </Link>

          <Link to="/" className="transition hover:text-orange-500">
            Apple
          </Link>

          <Link to="/" className="transition hover:text-orange-500">
            Samsung
          </Link>

          <Link to="/" className="transition hover:text-orange-500">
            Sony
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;