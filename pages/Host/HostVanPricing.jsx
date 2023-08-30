import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="p-6 space-y-2">
          <h3 className="text-3xl font-semibold text-blue-500">${currentVan.price}<span className="text-xl font-normal">/day</span></h3>
          <p className="text-gray-600">Experience the open road with style and comfort.</p>
        </div>
        <div className="bg-blue-500 text-center py-2">
          <button className="text-white hover:text-blue-500 hover:bg-white py-2 px-4 rounded-full border-2 border-white hover:border-blue-500 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
