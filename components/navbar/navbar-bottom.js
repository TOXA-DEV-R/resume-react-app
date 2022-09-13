/** @format */

import React from "react";

const NavbarBottom = () => {
  return (
    <div className="navbar__bottom mt-8 pl-5">
      <ul className="navbar__socialmedia-links flex">
        <li className="navbar__socialmedia-link w-7 h-7 mr-2 rounded-full bg-red-500">
          <a
            href="https://www.linkedin.com/in/tohir-bobojonov-013271212/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li className="navbar__socialmedia-link w-7 h-7 mr-2 rounded-full bg-red-500">
          <a
            href="https://github.com/TOXA-DEV-R"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li className="navbar__socialmedia-link w-7 h-7 mr-2 rounded-full bg-red-500">
          <a href="https://t.me/Tohir_Hoja" target="_blank" rel="noreferrer">
            <i className="bi bi-telegram"></i>
          </a>
        </li>
      </ul>
      <p className="text-sm font-normal text-white mt-7">@ 2022 By Arslan</p>
    </div>
  );
};

export default NavbarBottom;
