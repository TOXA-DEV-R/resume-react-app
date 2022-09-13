/** @format */

import React from "react";

const Mobile = () => {
  return (
    <div class="mobile absolute z-10 top-7 pr-5 pl-5 left-0 w-screen">
      <div class="bg-blue-500 rounded-xl w-full p-2 flex items-center">
        <button class="mobile__btn">
          <i class="bi bi-list"></i>
        </button>
        <div class="mobile__brand rounded-full overflow-hidden ml-6 mr-4">
          <img
            src="/assets/images/about_img.png"
            alt="My image"
            class="w-[4rem]"
          />
        </div>
        <h2 class="mobile__title text-xl text-white font-bold">
          Tohir Bobojonov
        </h2>
      </div>
    </div>
  );
};

export default Mobile;
