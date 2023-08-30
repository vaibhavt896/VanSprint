import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getHostVans } from "../../api";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchVanData() {
      try {
        const data = await getHostVans(id);
        setCurrentVan(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchVanData();
  }, [id]);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  return (
    <section className="bg-gray-100 min-h-screen p-6">
      <Link
        to=".."
        className="text-blue-500 hover:text-blue-700 mb-4 inline-flex items-center"
      >
        &larr; <span className="ml-1">Back to all vans</span>
      </Link>
      {loading && <h1 className="text-center text-2xl font-semibold">Loading...</h1>}
      {error && <h1 className="text-center text-2xl font-semibold">Error: {error.message}</h1>}
      {currentVan && (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative">
            <img src={currentVan.imageUrl} alt={currentVan.name} className="w-full rounded-lg shadow-lg" />
            <div className={`van-type-badge van-type-${currentVan.type}`}>{currentVan.type}</div>
          </div>
          <div className="md:w-1/2">
            <div className="py-4">
              <h1 className="text-3xl font-bold mb-2">{currentVan.name}</h1>
              <p className="text-lg text-gray-600">${currentVan.price}/day</p>
            </div>
            <nav className="border-t border-gray-300">
              <ul className="flex space-x-4 p-4">
                <NavLink
                  to="."
                  end
                  className="text-gray-700 hover:text-black transition duration-300"
                  activeStyle={activeStyles}
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  className="text-gray-700 hover:text-black transition duration-300"
                  activeStyle={activeStyles}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  className="text-gray-700 hover:text-black transition duration-300"
                  activeStyle={activeStyles}
                >
                  Photos
                </NavLink>
              </ul>
            </nav>
            <Outlet context={{ currentVan }} />
          </div>
        </div>
      )}
    </section>
  );
}
