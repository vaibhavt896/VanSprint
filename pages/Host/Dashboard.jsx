import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../api";

export default function Dashboard() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderVanElements(vans) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {vans.map((van) => (
            <Link
              to={`vans/${van.id}`}
              key={van.id}
              className="hover-card transition-transform transform hover:scale-105 hover:shadow-xl ease-out"
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={van.imageUrl}
                    alt={`Photo of ${van.name}`}
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{van.name}</h3>
                <p className="text-gray-600">${van.price}/day</p>
              </div>
            </Link>
          ))}
        </div>
      );
    }
  

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Income Summary</h2>
          <p className="text-gray-600">
            Income for the last <span className="text-blue-500">30 days</span>
          </p>
          <h3 className="text-2xl font-semibold mt-2">$2,260</h3>
          <Link
            to="income"
            className="block mt-4 text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Review Score</h2>
          <div className="flex items-center">
            <BsStarFill className="text-yellow-500 mr-1" />
            <p className="text-2xl font-semibold">5.0/5</p>
          </div>
          <Link
            to="reviews"
            className="block mt-4 text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Your Listed Vans</h2>
        {loading && !vans ? <p>Loading...</p> : renderVanElements(vans)}
      </div>
    </div>
  );
}
