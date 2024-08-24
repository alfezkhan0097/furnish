// ProductDescription.jsx
import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default ProductDescription;
