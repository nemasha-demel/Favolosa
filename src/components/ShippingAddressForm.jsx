import { Input } from "./ui/input";
import { useSelector } from "react-redux";
import { useCreateOrderMutation } from "@/lib/api";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// ---- Validation schema ----
const shippingAddressFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street address is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(1, "Zip code is required"),
  phone: z.string().min(10, "Phone number too short").max(15, "Phone number too long"),
  email: z.string().email("Invalid email address"),
  notes: z.string().optional(),
});

function ShippingAddressForm({ onSubmitRef }) {
  const form = useForm({
    resolver: zodResolver(shippingAddressFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      street: "",
      state: "",
      city: "",
      zip: "",
      phone: "",
      email: "",
      notes: "",
    },
  });

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartItems);
  const [createOrder] = useCreateOrderMutation();

  async function onSubmit(values) {
    try {
      const order = await createOrder({
        shippingAddress: values, // matches Mongoose schema now
        orderItems: cart.map((item) => ({
          productId: item.product._id,
          quantity: item.quantity,
        })),
      }).unwrap();
      navigate(`/cart/payment?orderId=${order._id}`);
    } catch (error) {
      console.error("Order creation failed:", error);
    }
  }

  // Expose handleSubmit to parent
  if (onSubmitRef) {
    onSubmitRef.current = form.handleSubmit(onSubmit);
  }

  return (
    <Form {...form}>
      <form className="space-y-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <FormField control={form.control} name="firstName" render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="lastName" render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        </div>

        {/* Country */}
        <FormField control={form.control} name="country" render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input placeholder="Sri Lanka" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>

        {/* Street */}
        <FormField control={form.control} name="street" render={({ field }) => (
          <FormItem>
            <FormLabel>Street Address</FormLabel>
            <FormControl>
              <Input placeholder="123 Main Street" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>

        {/* State & City */}
        <div className="grid grid-cols-2 gap-4">
          <FormField control={form.control} name="state" render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Western Province" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="city" render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Colombo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        </div>

        {/* Zip */}
        <FormField control={form.control} name="zip" render={({ field }) => (
          <FormItem>
            <FormLabel>Zip Code</FormLabel>
            <FormControl>
              <Input placeholder="12345" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>

        {/* Phone & Email */}
        <div className="grid grid-cols-2 gap-4">
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="0777777777" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        </div>

        {/* Notes */}
        <FormField control={form.control} name="notes" render={({ field }) => (
          <FormItem>
            <FormLabel>Order Notes (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="Any special instructions..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}/>
      </form>
    </Form>
  );
}

export default ShippingAddressForm;