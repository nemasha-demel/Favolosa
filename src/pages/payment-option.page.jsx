import { useNavigate, useSearchParams } from "react-router-dom";

function PaymentOptionsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId"); // preserve orderId

  const goToCardPayment = () => {
    navigate(`/cart/cardpayment?orderId=${orderId}`);
  };

  const handleCashOnDelivery = () => {
    // ✅ Normally you'd call API here to confirm COD
    navigate("/cart/complete");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Choose Payment Method</h1>

      <div className="space-y-4">
        <button
          onClick={goToCardPayment}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Pay with Debit / Credit Card
        </button>

        <button
          onClick={handleCashOnDelivery}
          className="w-full border border-gray-400 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Cash on Delivery
        </button>
      </div>
    </div>
  );
}

export default PaymentOptionsPage;
