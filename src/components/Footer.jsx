import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FBE1E1] py-10 px-4 lg:px-16">
      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Favolosa Branding + Social */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold">Favolosa</h2>
          <p className="text-sm mt-2">
            Favolosa.lk - Online Store for <br /> Fashionable Jewelry & <br /> Accessories
          </p>

          {/* Social Links */}
          <div className="mt-4">
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://www.instagram.com" className="text-gray-800 hover:text-pink-500">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com" className="text-gray-800 hover:text-pink-500">
                <Facebook size={24} />
              </a>
              <a href="https://www.facebook.com" className="text-gray-800 hover:text-pink-500">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold">Categories</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/shop/trending" className="hover:text-gray-600">Trending</a></li>
            <li><a href="/shop/new-arrivals" className="hover:text-gray-600">New Arrivals</a></li>
            <li><a href="/shop/best-sellers" className="hover:text-gray-600">Best Sellers</a></li>
            <li><a href="/shop/earrings" className="hover:text-gray-600">Earrings</a></li>
            <li><a href="/shop/bracelets" className="hover:text-gray-600">Bracelets</a></li>
            <li><a href="/shop/rings" className="hover:text-gray-600">Rings</a></li>
            <li><a href="/shop/chains" className="hover:text-gray-600">Chains</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <MapPin size={16} className="text-gray-800" />
              <a href="/delivery-info" className="hover:text-gray-600">Island-wide Delivery</a>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <Phone size={16} className="text-gray-800" />
              <a href="tel:+9477332568" className="hover:text-gray-600">+94 77 33 52 568</a>
            </li>
            <li className="flex items-center gap-2 justify-center lg:justify-start">
              <Mail size={16} className="text-gray-800" />
              <a href="mailto:favolosaluv@gmail.com" className="hover:text-gray-600">favolosaluv@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="w-full h-[200px]">
          <iframe
            className="w-full h-full border-0 rounded-md"
            src="https://www.google.com/maps?q=Marawila,+Sri+Lanka&output=embed"
            title="Favolosa Store Location"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>© 2025 Favolosa Jewelry | By Favolosa Team</p>
      </div>
    </footer>
  );
}
