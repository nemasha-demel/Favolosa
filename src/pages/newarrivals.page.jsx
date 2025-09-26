import React from 'react'
import {products, categories } from "@/data";
import CategoryButton from "../components/CategoryButton";
import ProductCard from "../components/ProductCard";
import { useState } from 'react';


function NewArrivalsPage() {
  const [selectedCategoryId, setSelectedCategory] = useState("ALL");

  const filteredProduct = selectedCategoryId === "ALL"
  ? products
  : products.filter((product)=> product.categoryId===selectedCategoryId);



  return (
    <section className="py-8 px-4 lg:px-16">
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 '>
            <h1 className='text-2xl sm:text-3xl' >New Arrivals</h1>
            <div className='flex flex-wrap items-center gap-2 sm:gap-x-4 max-w-full overflow-x-auto pb-2'>
                {
                    categories?.map((category)=>(
                        <CategoryButton key={category._id} category={category}
                        onClick={()=>setSelectedCategory(category._id)}
                        selectedCategoryId={selectedCategoryId}
                        />
                    ))
                }
            </div>
        </div >

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-8'>
                {
                    filteredProduct.map((product)=>{
                        return <ProductCard key={product._id} product={product}/>
                    })
                }
        </div>
    </section>
  )
}

export default NewArrivalsPage