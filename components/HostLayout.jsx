import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const navLinks = [
    { to: ".", text: "Dashboard" },
    { to: "income", text: "Income" },
    { to: "vans", text: "Vans" },
    { to: "reviews", text: "Reviews" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <nav className="  shadow-lg">
        <div className="container mx-auto px-4 py-2 flex justify-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-white bg-blue-400 rounded-lg py-2 px-4 font-semibold my-3 transition duration-300 transform hover:text-black hover:scale-105"
              activeClassName="text-black"
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="container mx-auto flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
