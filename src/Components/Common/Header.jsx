import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart.items);

  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-orange-500 text-white shadow-md"
        : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            {/* <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold shadow-lg">
              A
            </div> */}

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                art<span className="text-orange-500">ROOT</span>
              </h1>

         
            </div>
          </NavLink>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
              🔍
            </button>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>

            <NavLink to="/about" className={navStyle}>
              About
            </NavLink>

            <NavLink to="/products" className={navStyle}>
              Products
            </NavLink>

            <NavLink to="/more" className={navStyle}>
              More
            </NavLink>

            {/* Wishlist */}
            <button className="h-10 w-10 rounded-full bg-gray-100 text-lg hover:bg-orange-100 transition">
              ❤️
            </button>

            {/* Cart */}
            <NavLink
              to="/cart"
              className="relative h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-lg hover:bg-orange-100 transition"
            >
              🛒

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </NavLink>

            {/* Login */}
            <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition">
              Login
            </button>
          </div>
        </div>

        {/* Bottom Categories */}
        <div className="hidden md:flex items-center gap-6 mt-3 pt-3 border-t text-sm text-gray-500">
          <span className="font-semibold text-orange-500">
            Trending:
          </span>

          <NavLink
            to="/category/electronics"
            className="hover:text-orange-500"
          >
            Electronics
          </NavLink>

          <NavLink
            to="/category/fashion"
            className="hover:text-orange-500"
          >
            Fashion
          </NavLink>

          <NavLink
            to="/category/shoes"
            className="hover:text-orange-500"
          >
            Shoes
          </NavLink>

          <NavLink
            to="/category/accessories"
            className="hover:text-orange-500"
          >
            Accessories
          </NavLink>

          <NavLink
            to="/offers"
            className="font-semibold text-red-500 hover:text-red-600"
          >
             Today's Deals
          </NavLink>

          <div className="ml-auto rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            Free Shipping on Orders ₹999+
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;