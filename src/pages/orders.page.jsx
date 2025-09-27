import React from 'react'
import {Truck} from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

export default function OrdersPage() {
  return (
    <main className="px-8 py-8 min-h-screen bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Orders</h2>
        <div className="mt-4 flex flex-col items-center gap-3">   
          <Truck size={400} className="text-gray-200" />
          <p className="text-3xl">You don't have any orders</p>
          <p className="text-gray-400 text-center">You don't have any products in the cart yet. You will find a lot of interesting <br /> products on our "Shop" page.</p>
          <Link to="/">
            <Button>Return To Shop</Button>
          </Link>

        </div>
    </main>
    
  )
}
