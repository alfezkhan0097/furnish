// ProductPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import CustomerReviews from "./CustomerReviews";
import { products } from "./products";

const ProductPage = () => {
  const { id } = useParams(); // Use useParams to get the :id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data using the id
    const fetchedProduct = products[id]; // In a real app, replace this with an API call
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <ImageGallery images={product.images} />

        {/* Right: Product Details */}
        <ProductDetails name={product.name} price={product.price} />
      </div>

      {/* Product Description */}
      <ProductDescription description={product.description} />

      {/* Customer Reviews */}
      <CustomerReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductPage;
