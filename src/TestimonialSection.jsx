// src/components/TestimonialSection.jsx
import React, { useEffect, useState } from "react";
// import axios from "axios";
import TestimonialCard from "./TestimonialCard";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCards } from 'swiper/modules';
// import "swiper/css";
// import "swiper/css/effect-cards";
const testimonials = [
  {
    name: "Jane Doe",
    position: "CEO at Company",
    quote: "This service is amazing! It has changed the way we do business.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Smith",
    position: "Manager at Business",
    quote: "The best decision we ever made was choosing this company!",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sara Wilson",
    position: "Designer at Creative Co.",
    quote: "Highly recommend this service to anyone looking for quality.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sara Wilson",
    position: "Designer at Creative Co.",
    quote: "Highly recommend this service to anyone looking for quality.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sara Wilson",
    position: "Designer at Creative Co.",
    quote: "Highly recommend this service to anyone looking for quality.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sara Wilson",
    position: "Designer at Creative Co.",
    quote: "Highly recommend this service to anyone looking for quality.",
    image: "https://via.placeholder.com/150",
  },
];

const reviews = [
  {
    author_name: "Ndemi Otieno",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjVwXVGuxIeixPhTquqRnbxMYhGSQ8sUZO5MA4X95NRRTwevs6np=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a week ago",
    text: "Absolutely love my new sofa from HomeHaven Decor! The quality is top-notch, and it fits perfectly in my living room. The delivery was fast, and the customer service team was incredibly helpful. I’ll definitely be shopping here again!",
    time: 1722892741,
    translated: false,
  },
  {
    author_name: "Marcus Brown",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocKEW08PQ8IPvy5n7J6ro2AmaNT0UtuW1iaMHlaGaJbAJPx39w=s128-c0x00000000-cc-rp-mo",
    rating: 4,
    relative_time_description: "3 months ago",
    text: "I recently bought a dining table and it exceeded my expectations. The design is sleek, and the craftsmanship is excellent. The assembly was straightforward, too. My only wish is that they had more color options, but overall, I’m thrilled with my purchase!",
    time: 1714427307,
    translated: false,
  },
  {
    author_name: "Emily K",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjW2uptFfSkFx7Om-QyUkQjIOmLLcGCRdN9rxUjZOSqEdjhH3R_PjA=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a year ago",
    text: "The bed frame I ordered is stunning! It’s sturdy, stylish, and exactly what I was looking for. The whole process, from ordering to delivery, was smooth and hassle-free. HomeHaven Decor is now my go-to place for all my furniture needs.",
    time: 1691263634,
    translated: false,
  }
];

const TestimonialSection = () => {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await axios.get('/api/reviews');
  //       setReviews(response.data.result.reviews)
  //     } catch (error) {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   };
  //   fetchReviews();
  // }, []);

  return (
    <div className="relative bg-gray-100 p-8 md:p-12">
      <svg
        className="absolute bottom-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffd700"
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,192C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <path
          fill="#ffd700"
          fillOpacity="0.7"
          d="M0,32L48,32C96,32,192,32,288,42.7C384,53,480,75,576,117.3C672,160,768,224,864,224C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <h2 className="mx-auto mb-8 mt-12 w-max border-b-2 border-b-yellow-400 text-center font-figtree text-2xl font-bold text-gray-900 md:text-4xl">
        What Our Clients are Saying
      </h2>
      <div className="my-16 grid grid-cols-1 gap-8 md:my-24 md:grid-cols-3">
        {/* bottom change */}
        {reviews.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
{/* grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 */}
        {/* <Swiper
        effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="max-w-sm max-h-sm shadow-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className='overflow-hidden' key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper> */}