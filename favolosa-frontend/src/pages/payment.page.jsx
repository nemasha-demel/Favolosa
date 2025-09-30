import CartItem from "@/components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useSearchParams } from "react-router";
import PaymentForm from "@/components/PaymentForm";

function PaymentPage() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <main className="px-8 mt-20">
      
      <div className="mt-4">
        <PaymentForm orderId={orderId} />
      </div>

    </main>
  );
}

export default PaymentPage;