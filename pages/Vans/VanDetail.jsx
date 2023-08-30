import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export default function VanDetail() {
  const [van, setVan] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const location = useLocation();

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Link
        to={`..${search}`}
        relative="path"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-flex items-center transition-colors"
      >
        &larr; <span className="ml-1">Back to {type} vans</span>
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {loading && <h1 className="text-center text-2xl font-semibold">Loading...</h1>}
        {error && <h1 className="text-center text-2xl font-semibold">Error: {error.message}</h1>}

        {van && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 relative">
              <img src={van.imageUrl} alt={van.name} className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
              <div className={`van-type-badge van-type-${van.type} mt-3 font-extrabold shadow-sm`}>{van.type}</div>
            </div>
            <div className="md:w-1/2">
              <div className="py-4">
                <h1 className="text-3xl font-bold mb-2">{van.name}</h1>
                <p className="text-lg text-gray-600">${van.price}/day</p>
              </div>
              <p className="text-gray-800">{van.description}</p>
              <button className=" bg-red-400  text-white link-button mt-4 hover:bg-red-600 hover:text-white transition-colors">Rent this van</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
