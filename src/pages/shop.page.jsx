import { useGetAllProductsQuery, useGetProductsByCategoryQuery, useGetAllCategoriesQuery } from "@/lib/api";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard"; // ✅ import your reusable card
import { ChevronDown } from "lucide-react";

function ShopPage() {
  const { category: slug } = useParams();
  const { data: categories } = useGetAllCategoriesQuery();
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    if (categories && slug) {
      const category = categories.find((c) => c.slug === slug);
      setCategoryId(category?._id || null);
    }
  }, [categories, slug]);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = categoryId
    ? useGetProductsByCategoryQuery(categoryId)
    : useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <main className="p-6">
      {slug && <h2 className="text-3xl font-semibold text-center mb-8 capitalize">Category: {slug}</h2>}

      {/* ✅ Hardcoded Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {["Sort By", "Color", "Size", "Material", "Price Range"].map((filter) => (
          <button
            key={filter}
            className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full"
          >
            {filter} <ChevronDown className="w-4 h-4" />
          </button>
        ))}
      </div>

      {products?.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product._id} className="border rounded-lg p-3">
              <ProductCard key={product._id} product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </main>
  );
}

export default ShopPage;
