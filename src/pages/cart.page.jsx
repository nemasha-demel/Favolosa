import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartItem from "@/components/CartItem";
import { ShoppingBag } from "lucide-react";

function CartPage() {
  const cart = useSelector((state) => state.cart.cartItems);

  // ---------- Calculations ----------
  const subTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const shippingFee = cart.length > 0 ? 350 : 0;
  const total = subTotal + shippingFee;

  return (
    <main className="px-8 py-8 min-h-screen bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Cart</h2>

      {cart.length > 0 ? (
         <div className="grid grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="col-span-2 bg-pink-50 p-4 rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
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
        </div>

        {/* Cart Totals */}
        <div className="bg-pink-50 p-4 rounded-lg shadow h-fit">
          <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
          <div className="space-y-2 text-sm border rounded p-3">
            <div className="flex justify-between border-b pb-2">
              <span>Sub Total</span>
              <span>LKR {subTotal}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping</span>
              <span>Delivery : LKR {shippingFee}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>LKR {total}</span>
            </div>
          </div>
          <Button asChild className="w-full mt-4 bg-black text-white hover:bg-gray-800">
              <Link to="/checkout">Proceed To Checkout</Link>
            </Button>

          
        </div>
      </div>
      ): (


        <div className="mt-4 flex flex-col items-center gap-3">   
          <ShoppingBag size={400} className="text-gray-200" />
          <p className="text-3xl">This cart is empty</p>
          <p className="text-gray-400 text-center">You don't have any products in the cart yet. You will find a lot of interesting <br /> products on our "Shop" page.</p>
          <Link to="/">
            <Button>Return To Shop</Button>
          </Link>

        </div>
              )}

     
    </main>
  );
}

export default CartPage;
