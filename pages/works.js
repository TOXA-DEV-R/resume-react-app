/** @format */

import React, { useState } from "react";
import SimpleBar from "simplebar-react";

const Works = () => {
  const [tabList, setTabList] = useState([
    { label: "All Prjects", content: "all", id: 0 },
    { label: "Website", content: "website", id: 1 },
    { label: "Web Application", content: "web-application", id: 2 },
    { label: "Mobile Application", content: "mobile-app", id: 3 },
  ]);

  const tabsListControl = ref("all");
  const tabsListClasses = ref({ transform: "scale(1)", opacity: "1" });

  const state = useState([
    {
      title: "Nutsvalley",
      text: "Web Application for nuts etc..",
      id: 0,
      imageSrc: "/assets/images/nutsvalle-uz.png",
      link: "https://www.nutsvalley.uz/en",
      content: "web-application",
    },
    {
      title: "Cleanlife",
      text: "Website for work etc..",
      id: 1,
      imageSrc: "/assets/images/clinelife.png",
      link: "https://cleanlife.uz/",
      content: "website",
    },
    {
      title: "Memor",
      text: "Website for work etc..",
      id: 2,
      imageSrc: "/assets/images/memor.png",
      link: "https://memor.devdata.uz/",
      content: "website",
    },
    {
      title: "Sultanagro",
      text: "Website for work etc..",
      id: 2,
      imageSrc: "/assets/images/sulton-agro.png",
      link: "https://www.sultanagro.uz/",
      content: "website",
    },
  ]);

  const fliteredState = computed(function () {
    return state.filter((item) => {
      if (tabsListControl.value === item.content) {
        return true;
      } else if (tabsListControl.value == "all") {
        return true;
      } else {
        return false;
      }
    });
  });

  function tabsListHandle(content) {
    if (!(content === tabsListControl.value)) {
      tabsListControl.value = content;
      tabsListClasses.value = { transform: "scale(.6)", opacity: "0" };

      setTimeout(() => {
        tabsListClasses.value = { transform: "scale(1)", opacity: "1" };
      }, 300);
    }
  }
  return (
    <SimpleBar class="w-full h-full rounded-2xl works shadow-md shadow-gray-400 pt-12 pb-12 pl-10 pr-10 overflow-scroll overflow-x-hidden">
      <h2 class="text-2xl font-medium title works__title">Portfolio</h2>
      {/* <!-- works-tabs / --> */}
      <ul class="works__tabs mt-16 flex">
        {tabList.map(({ label, id, content }) => (
          <li
            class={`works__tabs-item font-normal text-sm uppercase flex justify-center items-center rounded-md text-gray-500 pt-2 pb-2 pr-3 pl-3 cursor-pointer transition-all duration-200 mr-3 ${
              content === tabsListControl ? "active" : ""
            }`}
            key={id}
            onClick={() => tabsListHandle(content)}
          >
            {label}
          </li>
        ))}
      </ul>
      {/* <!-- / works-tabs --> */}
      {/* <!-- works-wrapper / --> */}
      <div class="works__wrapper mt-6 grid grid-cols-3 gap-4">
        <div
          class="works__item w-full h-[10rem] rounded-md overflow-hidden relative"
          v-for="{id,title,text,imageSrc,link} in fliteredState"
          style={tabsListClasses}
        >
          <div class="works__image rounded-md overflow-hidden w-full h-full">
            <img src={imageSrc} alt={title} class="w-full h-full object-fill" />
          </div>
          <div class="works__details absolute top-0 left-0 w-full h-full bg-[#ff6565e7] p-6 flex flex-col justify-between opacity-0">
            <div class="works__details-header transition-all duration-600">
              <h4 class="works__details-title text-white text-lg font-medium">
                {{ title }}
              </h4>
              <p class="works__details-text text-white text-sm font-normal">
                {{ text }}
              </p>
            </div>
            <a
              href="link"
              target="_blank"
              class="works__see w-16 bg-white rounded-full flex justify-center items-center cursor-pointer transition-all"
            >
              <i class="bi bi-eye"></i>
              <span class="font-normal text-sm text-gray-500 ml-[0.4rem] transition-all duration-200">
                see
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- / works-wrapper --> */}

      {/* <!-- works IsSuccess / --> */}
      <div class="works__isSuccess grid grid-cols-3 gap-10 mt-16">
        <div class="works__isSuccess-item h-[10rem] rounded-lg border border-transparent transition-all duration-300 hover:border-gray-200">
          <span class="works__isSuccess-icon flex justify-center mt-3">
            <i class="bi bi-emoji-smile"></i>
          </span>
          <div class="mt-3">
            <h4 class="text-gray-500 text-center text-2xl font-bold">7</h4>
            <p class="t text-gray-600 text-center mt-1 font-medium">
              Happy Clients
            </p>
          </div>
        </div>

        <div class="works__isSuccess-item h-[10rem] rounded-lg border border-transparent transition-all duration-300 hover:border-gray-200">
          <span class="works__isSuccess-icon flex justify-center mt-3">
            <i class="bi bi-briefcase"></i>
          </span>
          <div class="mt-3">
            <h4 class="text-gray-500 text-center text-2xl font-bold">5</h4>
            <p class="t text-gray-600 text-center mt-1 font-medium">
              Successul Projects
            </p>
          </div>
        </div>

        <div class="works__isSuccess-item h-[10rem] rounded-lg border border-transparent transition-all duration-300 hover:border-gray-200">
          <span class="works__isSuccess-icon flex justify-center mt-3">
            <i class="bi bi-trophy"></i>
          </span>
          <div class="mt-3">
            <h4 class="text-gray-500 text-center text-2xl font-bold">5</h4>
            <p class="t text-gray-600 text-center mt-1 font-medium">
              Awards Received
            </p>
          </div>
        </div>
      </div>
      {/* <!-- works IsSuccess / --> */}
    </SimpleBar>
  );
};

export default Works;
