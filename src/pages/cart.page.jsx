import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartItem from "@/components/CartItem";
import { ShoppingBag } from "lucide-react";

function CartPage() {
  const cart = useSelector((state) => state.cart.cartItems);

  const subTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const shippingFee = cart.length > 0 ? 350 : 0;
  const total = subTotal + shippingFee;

  return (
    <main className="px-4 md:px-8 py-8 min-h-screen bg-white mt-15">
      <h2 className="text-3xl font-semibold text-center mb-8">Cart</h2>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-pink-50 p-4 rounded-lg overflow-x-auto">
            <table className="w-full text-left border-collapse md:table">
              <thead className="hidden md:table-header-group">
                <tr className="border-b">
                  <th className="py-2"></th>
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg shadow h-fit">
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
            <div className="space-y-2 text-sm border rounded p-3">
              <div className="flex justify-between border-b pb-2">
                <span>Sub Total</span>
                <span>USD {subTotal}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Shipping</span>
                <span>Delivery : USD {shippingFee}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>USD {total}</span>
              </div>
            </div>
            <Button asChild className="w-full mt-4 bg-black text-white hover:bg-gray-800">
              <Link to="/checkout">Proceed To Checkout</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center gap-3 px-4">
          <ShoppingBag size={200} className="text-gray-200 md:w-[400px] md:h-[400px]" />
          <p className="text-2xl md:text-3xl text-center">This cart is empty</p>
          <p className="text-gray-400 text-center text-sm md:text-base">
            You don't have any products in the cart yet. You will find a lot of interesting <br />
            products on our "Shop" page.
          </p>
          <Link to="/">
            <Button>Return To Shop</Button>
          </Link>
        </div>
      )}
    </main>
  );
}

export default CartPage;
