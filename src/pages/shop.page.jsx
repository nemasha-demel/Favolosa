import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useGetAllCategoriesQuery, useGetFilteredProductsQuery } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
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

  // ✅ Filters state
  const [filters, setFilters] = useState({
    categoryId: null,
    color: "",
    size: "",
    material: "",
    minPrice: "",
    maxPrice: "",
    sort: "",
  });

  // ✅ Update categoryId in filters when it changes
  useEffect(() => {
    if (categoryId) {
      setFilters((prev) => ({ ...prev, categoryId }));
    }
  }, [categoryId]);

  // ✅ Fetch products with filters
  const { data: products, isLoading, isError, error } = useGetFilteredProductsQuery(filters);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <main className="p-6">
      {slug && (
        <h2 className="text-3xl font-semibold text-center mb-8 capitalize">
          Category: {slug}
        </h2>
      )}

      {/* Filters UI */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {/* Price Range */}
        <input
          type="number"
          placeholder="Min Price"
          className="border px-3 py-2 rounded"
          onChange={(e) => setFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border px-3 py-2 rounded"
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
        />

        {/* Color */}
        <select
          className="border px-3 py-2 rounded"
          onChange={(e) => setFilters((prev) => ({ ...prev, color: e.target.value }))}
        >
          <option value="">All Colors</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        {/* Size */}
        <select
          className="border px-3 py-2 rounded"
          onChange={(e) => setFilters((prev) => ({ ...prev, size: e.target.value }))}
        >
          <option value="">All Sizes</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>

        {/* Material */}
        <select
          className="border px-3 py-2 rounded"
          onChange={(e) => setFilters((prev) => ({ ...prev, material: e.target.value }))}
        >
          <option value="">All Materials</option>
          <option value="cotton">Cotton</option>
          <option value="wool">Wool</option>
          <option value="leather">Leather</option>
        </select>

        {/* Sort buttons */}
        <button
          onClick={() => setFilters((prev) => ({ ...prev, sort: "price_asc" }))}
          className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full"
        >
          Price Low → High <ChevronDown className="w-4 h-4" />
        </button>
        <button
          onClick={() => setFilters((prev) => ({ ...prev, sort: "price_desc" }))}
          className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full"
        >
          Price High → Low <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Product List */}
      {products?.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product._id} className="border rounded-lg p-3">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </main>
  );
}

export default ShopPage;
