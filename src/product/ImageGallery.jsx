// ImageGallery.jsx
import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-4">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full rounded-lg"
        />
      </div>
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer rounded-lg ${
              selectedImage === image ? "ring-2 ring-yellow-400" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
