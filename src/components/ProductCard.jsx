import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../lib/features/cartSlice';
import { addToWishlist } from '@/lib/features/wishlistSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div 
      key={product._id} 
      className="bg-pink-50 p-2 rounded-xl shadow hover:shadow-lg transition duration-300"
    >
      {/* Image with floating icons */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-60 rounded-2xl overflow-hidden">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </Link>

        {/* Floating buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={() =>
              dispatch(addToCart({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image
              }))
            }
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ShoppingBag className="w-5 h-5 text-gray-800" />
          </button>

          <button
            onClick={() =>
              dispatch(addToWishlist({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image
              }))
            }
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <Heart className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3 px-1">
        <Link to={`/product/${product._id}`}>
          <span className="text-base font-medium block">{product.name}</span>
        </Link>
        <span className="text-sm text-gray-600 block">LKR {product.price}</span>

        {/* Rating */}
        <div className="flex items-center mt-1">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
