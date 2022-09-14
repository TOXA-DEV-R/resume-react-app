/** @format */

import { Suspense } from "react";
import Navbar from "./navbar/navbar";
import "simplebar/dist/simplebar.min.css";
import Mobile from "./mobile";

const Layout = ({ children }) => {
  return (
    <div className="bg-white lg:flex w-screen h-screen relative">
      <Suspense fallback={<div>navbar Loading...</div>}>
        <Navbar />
        <Mobile />
      </Suspense>
      <main className="w-full lg:max-w-[79.688rem] max-h-[38.75rem] h-full pt-4 pb-4 pr-2 pl-2 lg:pl-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
