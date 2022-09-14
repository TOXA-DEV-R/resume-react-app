/** @format */

import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { mobileOpen } from "../store/mobile-slice";

const Mobile = () => {
  const dispatch = useDispatch();

  return (
    <div className="mobile pt-2 pr-2 pl-2 w-screen">
      <div className="bg-blue-500 rounded-xl w-full p-2 flex items-center">
        <button
          className="mobile__btn"
          onClick={() => {
            dispatch(mobileOpen());
          }}
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="mobile__brand ml-6 mr-4">
          <Image
            src="/assets/images/about_img.png"
            width={64}
            height={64}
            alt="My image"
            className="rounded-full overflow-hidden"
          />
        </div>
        <h2 className="mobile__title text-xl text-white font-bold">
          Tohir Bobojonov
        </h2>
      </div>
    </div>
  );
};

export default Mobile;
