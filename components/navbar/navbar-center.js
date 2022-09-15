/** @format */

import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NavbarCenter = () => {
  const { asPath } = useRouter();

  const menuList = [
    { label: "home", path: "/", iconClass: "bi-house" },
    { label: "About", path: "/about", iconClass: "bi-person" },
    { label: "Services", path: "/services", iconClass: "bi-lightbulb" },
    { label: "Resume", path: "/resume", iconClass: "bi-file-earmark-person" },
    { label: "Works", path: "/works", iconClass: "bi-grid-fill" },
    { label: "Blog", path: "/blog", iconClass: "bi-pen" },
    { label: "Contact", path: "/contact", iconClass: "bi-telephone" },
  ];

  return (
    <ul className="navbar__center mt-9">
      {menuList.map((item, indx) => (
        <li
          className="navbar__item mt-2 mb-2 translate-x-0 hover:translate-x-3 transition-all duration-500"
          key={indx}
        >
          <Link href={item.path}>
            <a
              className={`flex items-center ${
                asPath == item.path ? "active" : ""
              }`}
            >
              <span className="icon mr-4">
                <i className={`bi ${item.iconClass}`}></i>
              </span>
              <span className="navbar__link inline-flex text-white text-md font-medium">
                {item.label}
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarCenter;
