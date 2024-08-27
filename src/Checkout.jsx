import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data and cart items to the backend
      const response = await axios.post("/checkout", {
        ...formData,
        cartItems,
      });
      console.log("Response from server:", response.data);
      alert("Your order has been placed successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error placing your order. Please try again.");
    }
  };

  return (
    <div className="relative min-h-svh flex flex-col justify-center p-12 items-center">
      <div className="absolute min-h-svh top-0 left-0 inset-0 bg-[url(/bg.jpg)] -z-10 blur-lg filter brightness-[0.2] backdrop-brightness-0"></div>
      <div className="text-2xl text-white font-inter mb-12">
        <Link to="/">HomeHaven Decor</Link>
        
      </div>
      <div className="checkout-page relative p-4 w-full grid grid-cols-2 gap-6 bg-white/10 border border-white/50 rounded-2xl *:text-white ">
        <h1 className="text-2xl mb-6 col-span-2">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-xl font-bold">Contact</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="input"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="input"
              required
            />
            <div>
              <input
                type="number"
                name="number"
                value={formData.number}
                placeholder="Number"
                onChange={handleChange}
                className="input"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black/80 text-white py-2 px-4 rounded-full  group transition duration-150"
          >
            <h1 className="borderef w-max mx-auto">Place Order</h1>
          </button>
        </form>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-200">${item.price}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
