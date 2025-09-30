import React from 'react'
import { products } from "@/data";
import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom';

function NewArrivals() {
  return (
    <section className="py-8 px-4 lg:px-16">
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 '>
        <h1 className='text-2xl sm:text-3xl'>New Arrivals</h1>
        <Link to="/newarrivals">
            <button className="text-sm sm:text-base px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
             More Products
            </button>
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-8'>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
