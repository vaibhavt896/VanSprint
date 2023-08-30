import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
import Info from "../../components/Info";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="container mx-auto p-7 ">
      <h1 className="text-3xl font-semibold mb-6 flex items-center justify-center ">Explore our van options</h1>
      <div className="flex flex-wrap gap-4 mb-4 items-center justify-center">
      <button
  onClick={() => handleFilterChange("type", "simple")}
  className={`van-filter-button ${
    typeFilter === "simple" ? "active" : ""
  } bg-gray-200 text-gray-800 border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-300 hover:border-gray-400 hover:shadow-md hover:scale-105`}
>
  Simple
</button>
<button
  onClick={() => handleFilterChange("type", "luxury")}
  className={`van-filter-button ${
    typeFilter === "luxury" ? "active" : ""
  } bg-gray-200 text-gray-800 border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-300 hover:border-gray-400 hover:shadow-md hover:scale-105`}
>
  Luxury
</button>
<button
  onClick={() => handleFilterChange("type", "rugged")}
  className={`van-filter-button ${
    typeFilter === "rugged" ? "active" : ""
  } bg-gray-200 text-gray-800 border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-300 hover:border-gray-400 hover:shadow-md hover:scale-105`}
>
  Rugged
</button>

        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-filter-button clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedVans.map((van) => (
          <Link
            key={van.id}
            to={van.id}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter,
            }}
            className="van-tile bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img src={van.imageUrl} alt={van.name} className="rounded-full" />
            <div className="van-info mt-4">
              <h3 className="text-lg font-semibold">{van.name}</h3>
              <p className="text-gray-600 mb-4">${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type p-4 mt-3 ${van.type} selected`}>{van.type}</i>
          </Link>
        ))}
      </div>
      <Info />

    </div>
  );
}
