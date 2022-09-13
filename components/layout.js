/** @format */

import React from "react";
import Navbar from "./navbar/navbar";
import "simplebar/dist/simplebar.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
