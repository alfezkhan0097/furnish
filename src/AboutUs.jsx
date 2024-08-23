// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-0">
      <div className="mb-12">
        <h2 className="text-center text-4xl font-bold mb-4">About Us</h2>
        <div className="grid grid-cols-2 gap-12 my-16">
          <p className="text-lg col-span-2 text-center">
            Welcome to Furniture Haven, where we bring you the best in comfort
            and design. Our mission is to transform your living spaces with
            high-quality, stylish furniture that meets your unique needs.
          </p>
          <p className="text-lg">
            At HomeHaven Decor, we believe that every piece of furniture tells a
            story. Our curated collections blend timeless craftsmanship with
            modern design, offering something unique for every room in your
            home. Whether you're furnishing a cozy apartment or a spacious
            house, we have the perfect pieces to reflect your personal style.
          </p>
          <p className="text-lg">
            We are committed to delivering more than just furniture; we strive
            to create a shopping experience that is as seamless as it is
            satisfying. From browsing our wide range of products to receiving
            your order at your doorstep, we prioritize your comfort and
            convenience at every step.
          </p>
          <p className="text-center col-span-2">
            Thank you for choosing HomeHaven Decor. Let’s make your dream home a
            reality.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full w-[150px] h-[150px] bg-white/40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80px"
              viewBox="0 -960 960 960"
              width="80px"
              fill="#e8eaed"
            >
              <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-center text-gray-200">
            To provide affordable, high-quality furniture that brings style and
            comfort to your home.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full w-[150px] h-[150px] bg-white/40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width={"80px"}
              fill="#e8eaed"
            >
              <path d="m576-160-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm79-360L513-662l56-56 85 85 170-170 56 57-225 226ZM80-280v-80h360v80H80Zm0-320v-80h360v80H80Z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-center text-gray-200">
            To be the leading provider of innovative and sustainable furniture
            solutions worldwide.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full w-[150px] h-[150px] bg-white/40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width={"80px"}
              fill="#e8eaed"
            >
              <path d="m576-160-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm79-360L513-662l56-56 85 85 170-170 56 57-225 226ZM80-280v-80h360v80H80Zm0-320v-80h360v80H80Z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-center text-gray-200">
            Quality, integrity, and customer satisfaction are at the heart of
            everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
