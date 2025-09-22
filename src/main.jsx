import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./lib/store";
import { Provider } from "react-redux";

import "./index.css";

import HomePage from "./pages/home.page.jsx";
import SignInPage from "./pages/sign-in.page.jsx";
import SignUpPage from "./pages/sign-up.page.jsx";
import ShopPage from "./pages/shop.page.jsx";
import RootLayout from "./layouts/root.layout.jsx";
import CartPage from "./pages/cart.page";
import WishListPage from "./pages/wishlist.page.jsx";
import CheckoutPage from "./pages/checkout.page";
import ProtectedLayout from "./layouts/protected.layout";
import CreateProductPage from "./pages/create-product.page";
import AdminProtectedLayout from "./layouts/admin-protected.layout";
import PaymentPage from "./pages/payment.page";
import CompletePage from "./pages/complete.page";
import ProductDetailsPage from "./pages/productdetails.page.jsx";


import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />}>
                <Route path=":category" element={<ShopPage />} />
              </Route>
              <Route path="/product/:id" element={<ProductDetailsPage />} />


              {/* Cart routes - including nested payment and complete */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishListPage />} />
              <Route path="/cart" element={<ProtectedLayout />}>
                <Route path="payment" element={<PaymentPage />} />
                <Route path="complete" element={<CompletePage />} />
              </Route>

              {/* Other protected routes */}
              <Route element={<ProtectedLayout />}>
                <Route path="/checkout" element={<CheckoutPage />} />
                
                <Route element={<AdminProtectedLayout />}>
                  <Route
                    path="/admin/products/create"
                    element={<CreateProductPage />}
                  />
                </Route>
              </Route>
            </Route>
            
            {/* Auth routes outside of RootLayout */}
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ClerkProvider>
  </StrictMode>
);