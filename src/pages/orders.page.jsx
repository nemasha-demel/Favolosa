import React from "react";
import { Truck } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useGetMyOrdersQuery } from "@/lib/api";

export default function OrdersPage() {
  const { data: orders = [], isLoading, error } = useGetMyOrdersQuery();

  if (isLoading) {
    return (
      <main className="mt-20 px-8 py-8 min-h-screen bg-white flex justify-center items-center">
        <p className="text-gray-600 text-lg">Loading your orders...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mt-20 px-8 py-8 min-h-screen bg-white flex justify-center items-center">
        <p className="text-red-500">Failed to load orders. Please try again.</p>
      </main>
    );
  }

  return (
    <main className="mt-20 px-8 py-8 min-h-screen bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">My Orders</h2>

      {orders.length === 0 ? (
        <div className="mt-4 flex flex-col items-center gap-3">
          <Truck size={400} className="text-gray-200" />
          <p className="text-3xl">You don't have any orders</p>
          <p className="text-gray-400 text-center">
            You don't have any orders yet. You will find a lot of interesting <br />
            products on our "Shop" page.
          </p>
          <Link to="/">
            <Button>Return To Shop</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Order ID: {order._id}</p>
                <span className="px-2 py-1 text-xs rounded bg-gray-100">
                  {order.orderStatus}
                </span>
              </div>
              <p>
                <strong>Payment:</strong> {order.paymentMethod} - {order.paymentStatus}
              </p>
              <p>
                <strong>Items:</strong>{" "}
                {order.items.map((item) => item.productId?.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
