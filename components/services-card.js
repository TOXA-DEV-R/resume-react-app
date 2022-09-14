/** @format */

import React from "react";

const ServicesCard = ({ iconclass, title, text }) => {
  return (
    <div className="services__card border rounded-lg pt-6 pb-6 pr-6 pl-6">
      <div className="services__card-header flex justify-center">
        <i className={`bi ${iconclass}`}></i>
      </div>
      <div className="services__card-body">
        <h3 className="services__card-titile text-xl font-bold mt-3 text-center">
          {title}
        </h3>
        <p className="text-center services__card-text font-normal mt-3">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
