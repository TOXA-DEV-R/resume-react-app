/** @format */

import Image from "next/image";
import React, { Fragment } from "react";

const NavbarTop = () => {
  return (
    <Fragment>
      <div className="navbar__top pl-5">
        <div className="avatar">
          <Image
            src="/assets/images/about_img.png"
            alt="Avatar"
            className="inline-block h-6/12 w-6/12 rounded-full object-cover"
            width={114}
            height={114}
            objectFit="cover"
            priority
          />
        </div>
        <h2 className="text-xl text-white font-bold mt-3 navbar__name">
          Tohir Bobojonov
        </h2>
        <p className="text-xs text-white opacity-90 font-bold uppercase mt-1">
          web developer
        </p>
      </div>
    </Fragment>
  );
};

export default NavbarTop;
