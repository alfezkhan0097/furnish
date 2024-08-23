// src/components/Product.jsx
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({product}) => {
  const [cartItems, setCartItems] = useState([]);
  // Retrieve cart items from local storage when the app loads
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to local storage whenever they change
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   console.log(cartItems)
  // }, [cartItems]);

  const addToCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...existingCartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  return (
    <div className="group bg-white/10 rounded-lg shadow-md overflow-hidden">
      <div className="h-56 overflow-hidden">
      <Link to={`/product/${product.id}`}>
      <img src={product.image} onClick={()=>{console.log(product.id)}} alt={product.name} className="w-full h-56 group-hover:scale-[1.1] transition-transform object-cover" />
      </Link>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
        <p className="text-neutral-300 mb-4">${product.price}</p>
        <button onClick={() => addToCart(product)} className="w-full px-4 py-2 font-semibold bg-white/20 text-white hover:text-neutral-800 rounded-lg hover:bg-white/80">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
