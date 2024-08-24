// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-[-180%] inset-0 bg-gradient-radial"></div>
      </div>
      <div className="relative container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-8 px-8 text-white">
        <div>
          <img src="icon-white.png" width={"80px"} alt="" />
          <h3 className="text-xl font-bold mb-4">
            The agency for better clients®
          </h3>
        </div>

        <div className="w-max">
          <p>
            <b>Email:</b> contact@homehavendecor.com
          </p>
          <p>
            <b>Phone:</b> +1 (990) 003-6892, +25 (470) 281-3101
          </p>
          <p>
            <b>Address:</b> Upper Hill St. Nairobi, 222
          </p>
          <p> Longonot Rd, Kenya</p>
          <a
            href="https://g.co/kgs/PAH2rws"
            className="hover:text-yellow-400 underline mt-2 block"
          >
            SEE ON MAP →
          </a>
        </div>

        <div className="right-0 absolute mr-24">
          <h4 className="font-semibold mb-4">WANT TO HAVE NEWS OF OFFRES?</h4>
          <a href="#" className="hover:text-yellow-400 underline block mb-4">
            SIGN UP FOR OUR NEWSLETTER →
          </a>
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-400">
              FaceBook
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
