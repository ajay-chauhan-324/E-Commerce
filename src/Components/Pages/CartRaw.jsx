import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { removeToCart,changeToCart } from "../../Store/cartSlice";

function CartRaw({ cartObj }) {
  let { id , qty} = cartObj;
  const dispatch = useDispatch();
  const removeCart = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      dispatch(removeToCart({ id }));

      Swal.fire({
        title: "Deleted!",
        text: "Item removed successfully.",
        icon: "success",
      });
    }
  };

  // const qty =1;

  const changeQtyInCart=(type)=>{
    let finalQty = qty;
    if(type == "+"){
        finalQty=qty+1
    }
    else{
      if(qty>1){
          finalQty=qty-1
      }
    }
    dispatch(changeToCart({id,finalQty}))
  }

  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link to="/product/imac" className="shrink-0 md:order-1">
          <img
            className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
            src={cartObj.image}
            alt="iMac"
          />
        </Link>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-2 py-1">
            <button
             onClick={()=>changeQtyInCart("-")}
              disabled={qty === 1}
              type="button"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition
    ${
      qty === 1
        ? "cursor-not-allowed bg-gray-200 text-gray-400"
        : "text-gray-600 hover:bg-blue-100 hover:text-blue-600"
    }`}
            >
              -
            </button>

            <input
              type="text"
              value={cartObj.qty}
             defaultValue={cartObj.qty}
              className="w-12 bg-transparent text-center font-semibold text-gray-800 outline-none"
            />

            <button
                onClick={()=>changeQtyInCart("+")}
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
            >
              +
            </button>
          </div>

          <div className="ml-6 text-end md:w-32">
            <p className="text-xl font-bold text-blue-600">${ Math.round( cartObj.price *qty)}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <p className="font-bold">{cartObj.title}</p>
          <Link
            // to="/product/imac"
            className="block text-lg font-semibold text-gray-900 transition hover:text-blue-600"
          >
            {cartObj.description}
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600 transition hover:bg-pink-100"
            >
              ❤️ Add to Favorites
            </button>

            <button
              onClick={removeCart}
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
            >
              ✕ Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartRaw;
