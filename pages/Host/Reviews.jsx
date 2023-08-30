import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const reviewsData = [
  {
    rating: 5,
    name: "John Doe",
    date: "April 5, 2023",
    text: "An amazing experience! The van was clean and comfortable. Will definitely rent again.",
  },
  {
    rating: 4,
    name: "Jane Smith",
    date: "March 22, 2023",
    text: "A great trip overall. The van was well-equipped and the host was friendly.",
  },
  {
    rating: 3.5,
    name: "Alex Johnson",
    date: "February 10, 2023",
    text: "Good experience, although there were a few minor issues. The van itself was nice.",
  },
  {
    rating: 2,
    name: "Emily Brown",
    date: "January 18, 2023",
    text: "Disappointing trip. The van had maintenance issues and wasn't as clean as expected.",
  },
  {
    rating: 4.5,
    name: "Michael Wilson",
    date: "December 5, 2022",
    text: "Fantastic van and great communication with the host. Highly recommended.",
  },
  {
    rating: 3,
    name: "Sophia Davis",
    date: "November 20, 2022",
    text: "Average experience. The van was okay, but there's room for improvement.",
  },
  {
    rating: 1,
    name: "William Turner",
    date: "October 15, 2022",
    text: "Terrible van and host. I would not rent again.",
  },
  {
    rating: 5,
    name: "Olivia Martinez",
    date: "September 8, 2022",
    text: "Absolutely loved the van and the trip. Everything was perfect!",
  },
  {
    rating: 4,
    name: "Liam Harris",
    date: "August 12, 2022",
    text: "Great experience overall. The van was comfortable and easy to drive.",
  },
  {
    rating: 3.5,
    name: "Ava Rodriguez",
    date: "July 25, 2022",
    text: "Decent trip. The van met our basic needs, but nothing extraordinary.",
  },
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    return (
      <div className="flex items-center text-yellow-500">
        {[...Array(fullStars)].map((_, index) => (
          <BsStarFill key={index} className="text-xl" />
        ))}
        {hasHalfStar && <BsStarHalf className="text-xl" />}
      </div>
    );
  };
  
  export default function Reviews() {
    return (
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-2">Customer Reviews</h2>
            <p className="text-gray-600 text-lg">Last 30 days</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <StarRating rating={review.rating} />
                  </div>
                  <div className="ml-4">
                    <p className="text-xl font-semibold">{review.name}</p>
                    <p className="text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }