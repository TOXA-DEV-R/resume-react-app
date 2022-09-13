/** @format */

import Link from "next/link";
import React from "react";

const NavbarCenter = () => {
  return (
    <ul className="navbar__center mt-9">
      <li className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500">
        <Link to="/" className="flex items-center">
          <span className="icon mr-4">
            <i className="bi bi-house"></i>
          </span>
          <span className="navbar__link inline-flex text-white text-md font-medium">
            Home
          </span>
        </Link>
      </li>
      <li className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500">
        <Link to="/about" className="flex items-center">
          <span className="icon mr-4">
            <i className="bi bi-person"></i>
          </span>
          <span className="navbar__link inline-flex text-white text-md font-medium">
            About
          </span>
        </Link>
      </li>
      <li className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500">
        <Link to="/services" className="flex items-center">
          <span className="icon mr-4">
            <i className="bi bi-lightbulb"></i>
          </span>
          <span className="navbar__link inline-flex text-white text-md font-medium">
            Services
          </span>
        </Link>
      </li>
      <li className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500">
        <Link to="/resume" className="flex items-center">
          <span className="icon mr-4">
            <i className="bi bi-file-earmark-person"></i>
          </span>
          <span className="navbar__link inline-flex text-white text-md font-medium">
            Resume
          </span>
        </Link>
      </li>
      <li className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500">
        <Link to="/works" className="flex items-center">
          <span className="icon mr-4">
            <i className="bi bi-grid-fill"></i>
          </span>
          <span className="navbar__link inline-flex text-white text-md font-medium">
            Works
          </span>
        </Link>
      </li>
      <li className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500">
        <Link to="/blog" className="flex items-center">
          <span className="icon mr-4">
            <i className="bi bi-pen"></i>
          </span>
          <span className="navbar__link inline-flex text-white text-md font-medium">
            Blog
          </span>
        </Link>
      </li>
      <li className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500">
        <Link to="/contact" className="flex items-center">
          <span className="icon mr-4">
            <i className="bi bi-telephone"></i>
          </span>
          <span className="navbar__link inline-flex text-white text-md font-medium">
            Contact
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarCenter;
