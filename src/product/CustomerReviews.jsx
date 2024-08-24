// CustomerReviews.jsx
import React from "react";

const CustomerReviews = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border border-yellow-400 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">
                {"★".repeat(review.rating)}{" "}
                <span className="text-gray-200">
                  {"★".repeat(5 - review.rating)}
                </span>
              </p>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
