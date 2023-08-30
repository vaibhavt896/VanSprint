import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className="bg-white p-6 md:p-8 rounded-md shadow-lg text-center  hover:shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 ">Access Denied</h2>
          <p className="text-gray-600 mb-4 md:mb-6">
            You must log in to access this page.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            <a href="/login">Log In</a>
          </button>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
