import { useGetAllProductsQuery, useGetProductsByCategoryQuery, useGetAllCategoriesQuery } from "@/lib/api";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard"; // ✅ import your reusable card

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
      <h1 className="text-2xl font-bold mb-4">Shop Page</h1>
      {slug && <h2 className="text-lg mb-2 capitalize">Category: {slug}</h2>}

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
