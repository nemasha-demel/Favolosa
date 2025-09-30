import React from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";
import { removeFromWishlist } from "@/lib/features/wishlistSlice";

function WishlistItem({ item }) {
  const dispatch = useDispatch();
  const product = item.product;

  return (
    <div
      key={product._id}
      className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col overflow-hidden"
    >

      <div className="flex justify-between items-center px-3 py-2 border-b">
        <button
          onClick={() => dispatch(removeFromWishlist(product._id))}
          className="flex items-center gap-1 text-xs text-gray-600 px-2 py-1 rounded hover:text-red-500 hover:bg-gray-200"
        >
          <X className="w-3.5 h-3.5" />
          Remove
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() =>
            dispatch(
              addToCart({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
              })
            )
          }
          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-gray-200 shadow"
        >
          <ShoppingBag className="w-5 h-5 text-gray-700" />
        </button>

        <Link to={`/product/${product._id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="px-3 py-3">
        <Link to={`/product/${product._id}`}>
          <span className="text-sm font-medium block">{product.name}</span>
        </Link>
        <span className="text-sm text-gray-600 block">
          LKR {product.price}
        </span>

        <div className="flex text-yellow-400 mt-1 text-sm">
          <span>★★★★☆</span>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
