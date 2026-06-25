import React from "react";
import CartRaw from "./CartRaw";
import CartRaw2 from "./CartRaw2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Cart() {
    const cart = useSelector((mystore) => mystore.cart.items);
  const dispatch =useDispatch();

  let total = cart.reduce((tot,obj)=>tot+=obj.qty*obj.price,0)
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
          Shopping Cart
        </h2>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Left Side */}
          <div>
            <div className="space-y-6">

              {
                cart.length>=1 
                ?
                cart.map((cartObj,index)=>      <CartRaw cartObj={cartObj} key={index}/>)
          
                :
                <p>no data in cart</p>
              }
           
            </div>

            <div className="mt-12">
              <h3 className="text-3xl font-bold text-gray-900">
                People Also Bought
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <CartRaw2 />
                <CartRaw2 />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Original price</span>
                  <span className="font-semibold">$7,592.00</span>
                </div>

                {/* <div className="flex justify-between">
                  <span className="text-gray-500">Savings</span>
                  <span className="font-semibold text-green-600">
                    -$299.00
                  </span>
                </div> */}

             

                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span className="font-semibold">$50</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-xl font-bold text-blue-600">
                      ${Math.round(total,2)+50}
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <Link
                  to="/"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Continue Shopping →
                </Link>
              </div>
            </div>

            {/* Coupon Card */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg">
              <label className="mb-3 block font-medium text-gray-900">
                Voucher or Gift Card
              </label>

              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none"
              />

              <button className="mt-4 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition-all hover:bg-black hover:shadow-lg">
                Apply Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;