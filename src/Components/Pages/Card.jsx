import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeToCart } from "../../Store/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function Card({ data }) {
  const {
    id,
    title,
    description,
    price,
    thumbnail,
    category,
    rating,
    brand,
    stock,
    discountPercentage,
    availabilityStatus,
    reviews,
  } = data;

  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  const dispatch = useDispatch();
  const addToCartItem = () => {
    const cartObj = {
      id,
      title,
      price,
      stock,
      description,
      image: thumbnail,
      qty:1,
    };

    dispatch(addToCart({ cartObj }));
    toast.success("Item Add in Cart");
    console.log(cartObj)
  };


  const cart = useSelector((mystore) => mystore.cart.items);

  let checkItemInCart = cart.find((obj) => obj.id == id);

  console.log(cart);
const removeCart = ()=>{

  dispatch(removeToCart({ id }));
}

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Discount Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          {discountPercentage.toFixed(0)}% OFF
        </span>

        {/* Wishlist */}
        <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md transition hover:scale-110">
          ❤️
        </button>

        {/* Stock */}
        <span
          className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${
            stock > 0 ? "bg-green-600" : "bg-red-700"
          }`}
        >
          {availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm capitalize text-gray-500">{category}</p>

        {/* Title */}
        <h3 className="mt-1 line-clamp-1 text-lg font-bold text-gray-900">
          {title}
        </h3>

        {/* Brand */}
        <p className="mt-1 text-sm font-medium text-red-600">{brand}</p>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{description}</p>

        {/* Rating */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
              ⭐ {rating}
            </span>

            <span className="text-sm text-gray-500">
              ({reviews?.length || 0})
            </span>
          </div>

          <span className="text-sm text-gray-500">Stock: {stock}</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-red-700">₹{price}</span>

          <span className="text-sm text-gray-400 line-through">
            ₹{originalPrice}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          {/* <button className="flex-1 rounded-xl bg-red-700 py-2 font-medium text-white transition hover:bg-red-800">
            Buy Now
          </button> */}
          {checkItemInCart ? (
            <button
              onClick={removeCart}
              className="flex-1 bg-red-600 rounded-xl border text-white border-gray-300 py-2 font-medium transition hover:bg-red-400"
            >
              Remove Cart
            </button>
          ) : (
            <button
              onClick={addToCartItem}
              className="flex-1 rounded-xl border border-gray-300 py-2 font-medium transition hover:bg-gray-100"
            >
              Add Cart
            </button>
          )}
        </div>

        {/* Details */}
        <Link
          to={`/product/${id}`}
          className="mt-4 block text-center text-sm font-medium text-red-700 hover:underline"
        >
          View Details →
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Card;
