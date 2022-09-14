/** @format */

import Image from "next/image";
import React from "react";

const AboutSkillsItem = ({ title, imgSrc, widthImage, heightImage }) => {
  return (
    <div className="about__skills-item border rounded-xl p-3 shadow-xl flex flex-col justify-between">
      <span className="flex justify-center">
        <Image
          src={imgSrc}
          width={widthImage}
          height={heightImage}
          objectFit="cover"
          priority
          alt={title}
        />
      </span>
      <p className="font-normal uppercase text-center text-gray-500 text-sm">
        {title}
      </p>
    </div>
  );
};

export default AboutSkillsItem;
