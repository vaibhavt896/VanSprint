import React from "react";
import bgImg from "../assets/images/about-hero.jpeg";
import { Link } from "react-router-dom";
import Info from "../components/Info";

export default function About() {
  return (
    <div className="about-page-container bg-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={bgImg}
          alt="About Hero"
          className="about-hero-image object-cover w-full h-72 md:h-96"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-3 md:mb-4 lg:mb-6">
              Discover the World <br className="hidden md:block" />
              on Four Wheels
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4">
              Crafting Extraordinary Journeys Through Van Exploration
            </p>
            <Link
              className="link-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-base md:text-lg lg:text-xl transition duration-300"
              to="/vans"
            >
              Explore Our Vans
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 lg:mb-6">
            Our Vision and Mission
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
            Elevating Your Adventures with the Perfect Travel Van Rental
          </p>
        </div>
        <div className="text-gray-800 leading-relaxed">
          <p className="mb-4 md:mb-6">
            At <span className="text-blue-600 font-extrabold">VanSprint</span>, we're not just in the business of van rentals; we're in the business of creating unforgettable journeys. Our mission is to empower your wanderlust and bring your travel dreams to life.
          </p>
          <p className="mb-4 md:mb-6">
            Each of our vans is more than just a vehicle; it's a vessel of possibility and discovery. Before each trip, our vans are meticulously recertified to ensure every mile you cover is smooth and worry-free.
          </p>
          <p className="mb-4 md:mb-6">
            Our team is a community of passionate vanlife enthusiasts who know firsthand the joy of exploring the world on four wheels. From the scenic highways to the hidden gems off the beaten path, we're here to help you curate a road trip that resonates with your sense of adventure.
          </p>
        </div>
      </div>
      <Info />

    </div>
  );
}
