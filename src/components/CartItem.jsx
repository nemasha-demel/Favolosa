function CartItem({ item }) {
  const subTotal = item.product.price * item.quantity;

  return (
    <tr className="border-b">
      {/* Remove button (can add delete logic later) */}
      <td className="py-2 px-2">
        <button className="text-gray-500 hover:text-red-600">×</button>
      </td>

      {/* Product Image + Name */}
      <td className="py-2 px-2 flex items-center space-x-3">
        <img
          src={item.product.image || "/placeholder.svg"}
          alt={item.product.name}
          className="w-14 h-14 object-cover rounded"
        />
        <span>{item.product.name}</span>
      </td>

      {/* Price */}
      <td className="py-2 px-2">LKR {item.product.price}</td>

      {/* Quantity (just display for now) */}
      <td className="py-2 px-2">
        <div className="flex items-center space-x-2">
          <button className="border px-2">-</button>
          <span>{item.quantity}</span>
          <button className="border px-2">+</button>
        </div>
      </td>

      {/* Sub Total */}
      <td className="py-2 px-2">LKR {subTotal}</td>
    </tr>
  );
}

export default CartItem;
