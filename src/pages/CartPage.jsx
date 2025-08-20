
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function CartPage({ closeCart }) {
  const [cartItems, setCartItems] = useState([]);
  const itemCount = cartItems.length;

  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg border-l p-4 flex flex-col z-50">
      {/* Close Button */}
      <div className="flex justify-between items-center border-b pb-3 relative">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          Shopping Cart
          <div className="relative">
            <ShoppingCart size={28} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {itemCount}
            </span>
          </div>
        </h2>
        <button
          onClick={closeCart}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>
      </div>

      {/* Empty Cart */}
      {itemCount === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <ShoppingCart size={64} className="text-gray-400 mb-4" />
          <p className="text-gray-600 mb-4">Your cart is empty!</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
            Shop Now
          </button>
        </div>
      ) : (
        <div className="flex-1 p-4 text-gray-700">
          <p>You have {itemCount} items in your cart.</p>
        </div>
      )}

      {/* Footer */}
      <div className="border-t pt-4 text-sm">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Sub-Total:</span>
          <span className="text-gray-800">Rs. 0.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 font-semibold">Total:</span>
          <span className="text-yellow-600 font-bold">Rs. 0.00</span>
        </div>
        <div className="flex gap-2 justify-end">
          <button className="border border-yellow-500 text-yellow-600 px-2 py-1 hover:bg-yellow-50 w-auto">
            Cart
          </button>
          <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 w-auto">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
