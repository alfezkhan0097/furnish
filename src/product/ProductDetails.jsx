// ProductDetails.jsx
import React from "react";
import { useState, useEffect } from "react";

const ProductDetails = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  // Retrieve cart items from local storage when the app loads
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  const addToCart = (product) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...existingCartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert("Item added to cart!");
  };
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl text-gray-500">${product.price.toFixed(2)}</p>
      <div className="flex items-center">
        {/* Placeholder for rating or other dynamic details */}
        <p className="text-sm text-gray-600">(4.5 / 5 stars)</p>
      </div>

      <div className="space-y-2">
        {/* Add product options like size, color, etc. */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-neutral-900 font-semibold text-white py-2 rounded hover:bg-yellow-400 hover:text-black transition duration-200"
        >
          Add to Cart
        </button>
        <button className="w-full bg-yellow-400 font-semibold text-white py-2 rounded hover:scale-[1.05] transition duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
