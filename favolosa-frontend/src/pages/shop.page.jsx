import { useParams } from "react-router";
import { useState, useEffect, useMemo } from "react";
import { useGetAllCategoriesQuery, useGetFilteredProductsQuery, useGetProductsByCategoryQuery } from "@/lib/api";
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

  const [filters, setFilters] = useState({
    categoryId: null,
    color: "",
    size: "",
    material: "",
    minPrice: "",
    maxPrice: "",
    sort: "",
  });

  useEffect(() => {
    if (categoryId) {
      setFilters((prev) => ({ ...prev, categoryId }));
    }
  }, [categoryId]);

  const { data: products, isLoading, isError, error } = useGetFilteredProductsQuery(filters);

  const { data: allProductsInCategory } = useGetProductsByCategoryQuery(categoryId);

  const attributes = useMemo(() => {
    if (!allProductsInCategory) return { colors: [], sizes: [], materials: [] };
    const colors = [...new Set(allProductsInCategory.map((p) => p.attributes.color))];
    const sizes = [...new Set(allProductsInCategory.map((p) => p.attributes.size))];
    const materials = [...new Set(allProductsInCategory.map((p) => p.attributes.material))];
    return { colors, sizes, materials };
  }, [allProductsInCategory]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <main className="p-6 mt-20">
      {slug && (
        <h2 className="text-3xl font-semibold text-center mb-8 capitalize">
          Category: {slug}
        </h2>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="number"
          placeholder="Min Price"
          className="border px-3 py-2 rounded-full bg-white text-gray-800"
          onChange={(e) => setFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border px-3 py-2 rounded-full bg-white text-gray-800"
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
        />

        <select
          className="border px-3 py-2 rounded-full bg-black text-white"
          value={filters.color}
          onChange={(e) => setFilters((prev) => ({ ...prev, color: e.target.value }))}
        >
          <option value="">All Colors</option>
          {attributes.colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select
          className="border px-3 py-2 rounded-full bg-black text-white"
          value={filters.size}
          onChange={(e) => setFilters((prev) => ({ ...prev, size: e.target.value }))}
        >
          <option value="">All Sizes</option>
          {attributes.sizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <select
          className="border px-3 py-2 rounded-full bg-black text-white"
          value={filters.material}
          onChange={(e) => setFilters((prev) => ({ ...prev, material: e.target.value }))}
        >
          <option value="">All Materials</option>
          {attributes.materials.map((material) => (
            <option key={material} value={material}>{material}</option>
          ))}
        </select>

        <div className="relative">
          <select
            className="border px-4 py-2 rounded-full bg-black text-white appearance-none pr-8"
            onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
            value={filters.sort}
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price Low → High</option>
            <option value="price_desc">Price High → Low</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
        </div>
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
