import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import QuantitySelector from "@/components/QuantitySelector";
import { addToCart, removeFromCart } from "@/lib/features/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    if (quantity !== item.quantity) {
      dispatch(
        addToCart({
          ...item.product,
          quantity: quantity - item.quantity,
        })
      );
    }
  }, [quantity]);

  const subTotal = item.product.price * quantity;

  const handleRemove = () => {
    dispatch(removeFromCart(item.product._id));
  };

  return (
    <tr className="border-b">
      {/* Remove button */}
      <td className="py-2 px-2">
        <button
          onClick={handleRemove}
          className="text-gray-500 hover:text-red-600 text-lg"
        >
          ×
        </button>
      </td>

      {/* Product Image  */}
      <td className="py-2 px-2 flex items-center space-x-3">
        <img
          src={item.product.image || "/placeholder.svg"}
          alt={item.product.name}
          className="w-14 h-14 object-cover rounded"
        />
        <span>{item.product.name}</span>
      </td>

      {/* Price */}
      <td className="py-2 px-2">USD {item.product.price}</td>

      {/* Quantity */}
      <td className="py-2 px-2">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </td>

      {/* Sub Total */}
      <td className="py-2 px-2">USD {subTotal}</td>
    </tr>
  );
}

export default CartItem;
