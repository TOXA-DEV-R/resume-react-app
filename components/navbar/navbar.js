/** @format */

import NavbarTop from "./navbar-top";
import NavbarCenter from "./navbar-center";
import NavbarBottom from "./navbar-bottom";
import SimpleBar from "simplebar-react";

const Navbar = () => {
  return (
    <header className="max-w-[16rem] header w-full max-h-[38.75rem] h-full pt-4 pb-4 pl-2">
      <div className="w-full h-full overflow-hidden rounded-2xl flex">
        <div className="w-full h-full bg-blue-600 relative">
          <SimpleBar className="w-full h-full rounded-2xl shadow-md shadow-gray-400 navbar-section pt-7 pb-7 overflow-x-hidden overflow-y-scroll ">
            <NavbarTop />
            <NavbarCenter />
            <NavbarBottom />
          </SimpleBar>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
