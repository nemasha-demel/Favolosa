import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import WishList from "@/components/WishList";

function WishListPage() {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <main className="px-16 min-h-screen py-8">
      <h2 className="text-4xl font-bold">My Wishlist</h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((item) => (
          <WishList key={item.product._id} item={item} />
        ))}
      </div>

      <div className="mt-4">
        {wishlist.length > 0 ? (
          <Button asChild>
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        ) : (
          <p>No items in wishlist</p>
        )}
      </div>
    </main>
  );
}

export default WishListPage;
