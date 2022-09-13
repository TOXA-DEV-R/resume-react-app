/** @format */

import React from "react";

const AboutSkillsItem = ({ title, children }) => {
  return (
    <div class="about__skills-item border rounded-xl p-3 shadow-xl flex flex-col justify-between">
      <span class="flex justify-center">{children}</span>
      <p class="font-normal uppercase text-center text-gray-500 text-sm">
        {title}
      </p>
    </div>
  );
};

export default AboutSkillsItem;
