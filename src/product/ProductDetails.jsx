// ProductDetails.jsx
import React from "react";

const ProductDetails = ({ name, price }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-xl text-gray-500">${price.toFixed(2)}</p>
      <div className="flex items-center">
        {/* Placeholder for rating or other dynamic details */}
        <p className="text-sm text-gray-600">(4.5 / 5 stars)</p>
      </div>

      <div className="space-y-2">
        {/* Add product options like size, color, etc. */}
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
          Add to Cart
        </button>
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
