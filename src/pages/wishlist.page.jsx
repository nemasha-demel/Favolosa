import { useSelector } from "react-redux";
import WishlistItem from "@/components/WishlistItem";

function WishListPage() {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <main className="px-16 min-h-screen py-8">
      <h2 className="text-4xl font-bold">My Wishlist</h2>

      {wishlist.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <WishlistItem key={item.product._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-600">No items in wishlist</p>
      )}
    </main>
  );
}

export default WishListPage;
