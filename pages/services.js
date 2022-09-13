/** @format */

import React from "react";
import SimpleBar from "simplebar-react";
import ServicesCard from "../components/services-card";

const Services = () => {
  return (
    <simplebar
      data-simplebar-auto-hide="false"
      class="w-full h-full rounded-2xl services shadow-md shadow-gray-400 pt-12 pb-12 pl-10 pr-10 overflow-scroll overflow-x-hidden"
    >
      <h2 class="text-2xl font-medium title services__title">Services</h2>
      <div class="services__cards mt-14 grid grid-cols-3 gap-6 justify-between">
        <ServicesCard
          title="Web Development"
          text="My web development services include both front-end development."
          iconClass="bi bi-globe"
        />
        <ServicesCard
          title="Responsive"
          text="My layouts will work on any device, big or small."
          iconClass="bi bi-tablet"
        />
        <ServicesCard
          title="Dynamic"
          text="Websites don't have to be static, I love making pages come to life."
          iconClass="bi bi-bar-chart"
        />
        <ServicesCard
          title="Development"
          text="Whether it is enhancing an existing application or architecting an application, I'm up for the challenge."
          iconClass="bi bi-lightbulb"
        />
        <ServicesCard
          title="Fast"
          text="Fast load times and lag free interaction, my highest priority."
          iconClass="bi bi-graph-up-arrow"
        />
      </div>
    </simplebar>
  );
};

export default Services;
