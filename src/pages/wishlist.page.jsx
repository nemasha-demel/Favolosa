import { useSelector } from "react-redux";
import WishlistItem from "@/components/WishlistItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function WishListPage() {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <main className="px-16 min-h-screen py-8">
      <h2 className="text-4xl font-bold text-center">Wishlist</h2>

      {wishlist.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <WishlistItem key={item.product._id} item={item} />
          ))}
        </div>
      ) : (

        <div className="mt-4 flex flex-col items-center gap-3">
          
          
          <Heart size={400} className="text-gray-200" />
          <p className="text-3xl">This wishlist is empty</p>
          <p className="text-gray-400 text-center">You don't have any products in the wishlist yet. You will find a lot of interesting <br /> products on our "Shop" page.</p>
          <Link to="/">
            <Button>Return To Shop</Button>
          </Link>

        </div>


      )}
    </main>
  );
}

export default WishListPage;
