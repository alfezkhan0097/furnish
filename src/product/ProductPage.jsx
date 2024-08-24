// ProductPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import CustomerReviews from "./CustomerReviews";
import { products } from "./products";
import Header from "../Header";
import List from "../List";
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
    <>
      <div className="px-12 bg-neutral-950 text-white">
        <Header />
        <List />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Images */}
          <ImageGallery images={product.images} />

          {/* Right: Product Details */}
          <ProductDetails product={product} />
        </div>

        {/* Product Description */}
        <ProductDescription description={product.description} />

        {/* Customer Reviews */}
        <CustomerReviews reviews={product.reviews} />
      </div>
    </>
  );
};

export default ProductPage;
