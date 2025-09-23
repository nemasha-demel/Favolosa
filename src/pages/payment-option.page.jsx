import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function PaymentOptionsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId"); // preserve orderId

  const [paymentMethod, setPaymentMethod] = useState("");

  const termsAndConditions = {
    card: `By selecting card payment, you agree that the transaction will be processed securely through our payment gateway. Refunds, if applicable, will be issued to the same card used. Your card details are not stored by us.`,
    cod: `By selecting Cash on Delivery (COD), you agree that payment must be made in full at the time of delivery. Orders may be canceled if payment is not completed at delivery. Additional delivery charges may apply for COD orders.`,
    default: `Terms & Conditions`,
  };

  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "card") {
      navigate(`/cart/cardpayment?orderId=${orderId}`);
    } else if (paymentMethod === "cod") {
      navigate("/cart/complete");
    }
  };

  return (
    <main className="px-16 min-h-screen py-8">
      <div className="max-w-md mx-auto p-6 bg-red-50 rounded-xl shadow-sm">
        <h1 className="text-lg font-semibold mb-4">Payment Information</h1>

        <div className="bg-white p-6 rounded-xl space-y-4 shadow">
          {/* Radio buttons */}
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-pink-500"
            />
            <span>Pay with Debit or Credit card</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-pink-500"
            />
            <span>Cash on Delivery (COD)</span>
          </label>

          {/* Terms & Conditions (always shown) */}
          <div className="p-3 border rounded-md border-pink-200 text-sm text-gray-700 min-h-[100px]">
            {termsAndConditions[paymentMethod] || termsAndConditions.default}
          </div>

          {/* Confirm button */}
          <button
            onClick={handleConfirmOrder}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </main>
  );
}

export default PaymentOptionsPage;
