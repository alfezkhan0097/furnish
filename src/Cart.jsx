// components/CartPage.js
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const removeFromCart = (index) => {
    console.log("Before removing:", cartItems);

    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);

    console.log("After removing:", newCartItems);

    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);


  return (
    <div className="p-4 bg-neutral-900 min-h-screen">
      <h1 className="text-2xl text-white mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
          {cartItems.map((item, index) => (
            // <div key={index} className="p-4 border rounded-lg">
            //   <h2 className="text-lg">{item.name}</h2>
            //   <p className="text-sm text-gray-600">${item.price}</p>
            //   <button
            //     className="mt-2 bg-red-500 text-white py-1 px-3 rounded"
            //     onClick={() => removeFromCart(index)}
            //   >
            //     Remove
            //   </button>
            // </div>
            <div className="group bg-white/10 rounded-lg shadow-md overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-56 group-hover:scale-[1.1] transition-transform object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-neutral-300 mb-4">${item.price}</p>
                <button onClick={() => removeFromCart(index)} className="w-full px-4 py-2 font-semibold bg-white/20 text-white hover:text-neutral-800 rounded-lg hover:bg-red-500/9 0">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="block mt-4 text-blue-500">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Cart;
