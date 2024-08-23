// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { products } from "./product/products";
import { useState } from "react";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const product = Object.values(products)
  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on search query
  const filteredProducts = product.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="pt-8 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold w-max font-inter">
          <a href="/">HomeHaven Decor</a>
        </div>

        {/* Search Bar */}
        <div className="flex w-4/6 mx-auto relative">
          <input
            type="text"
            placeholder="Search for furniture, products and more"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 bg-neutral-900/80 placeholder-neutral-400  rounded-full focus:outline-none"
          />
          <svg className=" absolute right-5 top-[50%] translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          {searchQuery && ( <ul className="absolute bg-neutral-900/80 w-full top-10 p-4 rounded-md z-10">
        {filteredProducts.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      )}
        </div>

        {/* Account and Cart */}
        <div className="group" >
          <Link to="/cart" className="borderef text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
