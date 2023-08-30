import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png";
import logo from "/assets/images/logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function fakeLogOut() {
        localStorage.removeItem("loggedin");
    }

    return (
        <header className="bg-white text-gray-900 shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="flex items-center space-x-2" to="/">
                    <img className="w-[60px] h-[60px]" src={logo} alt="Logo" />
                    <h1 className="text-3xl font-semibold tracking-tight">VanSprint</h1>
                </Link>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                <nav
                    className={`space-x-6 md:flex ${
                        menuOpen ? "block" : "hidden"
                    } md:block`}
                >
                    <NavLink
                        to="/host"
                        className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Host Events
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/vans"
                        className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Vans
                    </NavLink>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="login">
                        <img
                            src={imageUrl}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-border"
                            alt="Login Icon"
                        />
                    </Link>
                    <button
                        className="text-base font-medium text-red-600 hover:text-red-800 transition-colors"
                        onClick={fakeLogOut}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}
