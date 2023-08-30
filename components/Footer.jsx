import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Info from "./Info";

export default function Footer() {
  return (
    
    <footer className="bg-gray-900 text-white py-8 md:py-16">


        
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="text-center md:text-left mb-4 md:mb-0">

          <h2 className="text-xl md:text-2xl font-semibold mb-2">Explore VanSprint</h2>
          <p className="text-xs md:text-sm">Unleash your wanderlust with us.</p>
        </div>
        <div className="text-center">
          <h2 className="text-white mb-3 md:mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-xs md:text-sm">
            &copy; {new Date().getFullYear()} VanSprint. All rights reserved.
          </p>
        </div>
      </div>
      <style>
        {`
          footer {
            background-color: #161616;
            color: #aaaaaa;
            height: 190px;
            display: flex;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            font-weight: 500;
          }
        `}
      </style>
    </footer>
  );
}
