import { useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ShippingAddressForm from "@/components/ShippingAddressForm";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cartItems);
  const onSubmitRef = useRef(null);

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  // ---- Calculate totals ----
  const subTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shippingFee = 350;
  const total = subTotal + shippingFee;

  return (
    <main className="px-16 min-h-screen py-8 bg-white mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-pink-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <ShippingAddressForm onSubmitRef={onSubmitRef} />
        </div>

        <div className="bg-pink-50 p-6 rounded-lg shadow h-fit">
          <h3 className="text-xl font-semibold mb-4">Your Order</h3>
          <div className="space-y-2 text-sm border rounded p-3 mt-4">
            <div className="flex justify-between border-b pb-2">
              <span>Sub Total</span>
              <span>USD {subTotal}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping</span>
              <span>USD {shippingFee}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>USD {total}</span>
            </div>
          </div>

          <Button
            className="w-full mt-6 bg-black text-white hover:bg-gray-800"
            onClick={() => onSubmitRef.current && onSubmitRef.current()}
          >
            Place Order
          </Button>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
