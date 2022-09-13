/** @format */

import React from "react";

const ServicesCard = ({ iconClass, title, text }) => {
  return (
    <div class="services__card border rounded-lg pt-6 pb-6 pr-6 pl-6">
      <div class="services__card-header flex justify-center">
        <i class={iconClass}></i>
      </div>
      <div class="services__card-body">
        <h3 class="services__card-titile text-xl font-bold mt-3 text-center">
          {title}
        </h3>
        <p class="text-center services__card-text font-normal mt-3">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
