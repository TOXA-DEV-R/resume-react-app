/** @format */

import NavbarTop from "./navbar-top";
import NavbarCenter from "./navbar-center";
import NavbarBottom from "./navbar-bottom";
import SimpleBar from "simplebar-react";
import { useDispatch, useSelector } from "react-redux";
import { mobileClose } from "../../store/mobile-slice";
import { useEffect } from "react";

const Navbar = () => {
  const { isMobileOpen } = useSelector((state) => state.mobileSlice);
  const dispatch = useDispatch();

  const resizeWindow = () => {
    dispatch(mobileClose());
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  });
  return (
    <header
      className={`max-w-[16rem] header w-full lg:max-h-[38.75rem] h-full pt-4 pb-4 pl-2 transition-all duration-300 ${
        isMobileOpen ? "show-header max-w-full" : ""
      }`}
      onClick={() => {
        dispatch(mobileClose());
      }}
    >
      {isMobileOpen && (
        <button
          className="header__close fixed top-3 right-4"
          onClick={() => {
            dispatch(mobileClose());
          }}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      )}

      <div className="max-w-[16rem] lg:max-w-full w-full h-full overflow-hidden rounded-2xl flex">
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
