import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ShoppingBag, Heart, Truck } from "lucide-react";
import { useSelector } from "react-redux";
import { SignedIn, UserButton, SignedOut } from "@clerk/clerk-react";
import ProductSearchForm from "./ProductSearchForm";
import { useUser } from "@clerk/clerk-react";

export default function Navigation() {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate total quantity of items in cart and wishlist
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlistItems.reduce((total, item) => total + item.quantity, 0);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#FFE2E2] border-b border-gray-200 px-4 lg:px-16 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl font-mono">
          Favolosa
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { path: "/shop/rings", label: "Rings" },
            { path: "/shop/bracelets", label: "Bracelets" },
            { path: "/shop/earrings", label: "Earrings" },
            { path: "/shop/necklaces", label: "Necklaces" },
            { path: "/shop/others", label: "Others" },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="font-medium hover:text-gray-600">
              {item.label}
            </Link>
          ))}
        </nav>

        {isAdmin && (
          <div>
            <Link to="/admin/products/create">Create Product</Link>
          </div>
        )}

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <ProductSearchForm />
          </div>

          <Link to="/cart" aria-label="Shopping Bag" className="p-1 relative">
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link to="/wishlist" aria-label="Wishlist" className="p-1 relative">
            <Heart size={20} />
            {wishlistItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistItemCount}
              </span>
            )}
          </Link>

          <Link to="/orders" aria-label="Orders" className="p-1 relative">
            <Truck size={20} />
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <div className="hidden md:block">
            <SignedOut>
              <div className="flex items-center gap-4">
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-4 right-4 bg-white z-10 p-4 shadow-md rounded-md">
          <div className="mb-3">
            <ProductSearchForm />
          </div>

          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {[
              { path: "/shop/rings", label: "Rings" },
              { path: "/shop/bracelets", label: "Bracelets" },
              { path: "/shop/earrings", label: "Earrings" },
              { path: "/shop/necklaces", label: "Necklaces" },
              { path: "/shop/others", label: "Others" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="block md:hidden px-4 mt-2 flex items-center gap-4">
            <SignedOut>
              <Link to="/sign-in">Sign In</Link>
              <Link to="/sign-up">Sign Up</Link>
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  );
}
