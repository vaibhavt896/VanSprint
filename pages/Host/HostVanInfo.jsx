import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-800 to-purple-800 text-white">
      <div className="max-w-3xl p-8 bg-opacity-70 backdrop-blur-md rounded-xl hover:shadow-2xl transition duration-300">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Explore Van Insights
        </h1>
        <div className="grid grid-cols-2 gap-6 text-center mb-8">
          <div className="hover:bg-white hover:bg-opacity-10 transition duration-300 rounded-xl p-4 transform hover:scale-105 hover:shadow-2xl">
            <h4 className="text-lg md:text-xl font-semibold">
              Van Name
            </h4>
            <p className="text-xl md:text-2xl">{currentVan.name}</p>
          </div>
          <div className="hover:bg-white hover:bg-opacity-10 transition duration-300 rounded-xl p-4 transform hover:scale-105 hover:shadow-2xl">
            <h4 className="text-lg md:text-xl font-semibold">
              Category
            </h4>
            <p className="text-xl md:text-2xl">{currentVan.type}</p>
          </div>
        </div>
        <div className="border-t border-white border-opacity-25 py-6">
          <h4 className="text-lg md:text-xl font-semibold">
            Description
          </h4>
          <p className="text-xl md:text-2xl">{currentVan.description}</p>
        </div>
        <div className="mt-8">
          <h4 className="text-lg md:text-xl font-semibold">
            Visibility
          </h4>
          <p className="text-xl md:text-2xl text-green-400">Public</p>
        </div>
      </div>
    </section>
  );
}
