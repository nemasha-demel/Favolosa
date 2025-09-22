import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Star } from "lucide-react";
import { addToCart } from "@/lib/features/cartSlice";
import { addToWishlist } from "@/lib/features/wishlistSlice";
import { useGetProductByIdQuery } from "@/lib/api"; // Import the new hook

function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Use RTK Query to fetch the specific product
  const { 
    data: product, 
    isLoading, 
    isError, 
    error 
  } = useGetProductByIdQuery(id);
  
  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-[400px] bg-gray-200 rounded-2xl"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="flex gap-3">
                <div className="h-10 bg-gray-200 rounded w-32"></div>
                <div className="h-10 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-gray-600">Loading product...</p>
      </div>
    );
  }
  
  // Error or not found
  if (isError || !product) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-4">
            {isError ? 
              `Error loading product: ${error?.data?.message || error?.message || 'Unknown error'}` :
              `Could not find product with ID: ${id}`
            }
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
            <button 
              onClick={() => window.location.href = '/shop'}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Success - render product
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left - Image */}
        <div className="w-[578px] h-[400px] mx-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain rounded-2xl shadow"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
            }}
          />
        </div>
        
        {/* Right - Product Info */}
        <div>
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          
          {/* Rating */}
          <div className="flex items-center mt-2">
            {Array(5).fill(0).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          
          <p className="text-xl font-bold mt-3">LKR {product.price}</p>
          <p className="text-gray-600 mt-4">
            {product.description || "No description available."}
          </p>
          
          {/* Category if available */}
          {product.category && (
            <div className="mt-4">
              <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {typeof product.category === 'object' ? product.category.name : product.category}
              </span>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(addToWishlist(product))}
              className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;