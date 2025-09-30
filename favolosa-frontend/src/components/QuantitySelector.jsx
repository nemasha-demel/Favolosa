import React from "react";

function QuantitySelector({ quantity, setQuantity, min = 1, max = 99 }) {
  const increment = () => setQuantity(prev => (prev < max ? prev + 1 : prev));
  const decrement = () => setQuantity(prev => (prev > min ? prev - 1 : prev));

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrement}
        className={`border px-3 py-1 rounded hover:bg-gray-100 transition ${
          quantity === min ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={quantity === min}
      >
        -
      </button>
      <span className="px-2">{quantity}</span>
      <button
        onClick={increment}
        className={`border px-3 py-1 rounded hover:bg-gray-100 transition ${
          quantity === max ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={quantity === max}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
