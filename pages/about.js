/** @format */

import Image from "next/image";
import React from "react";
import SimpleBar from "simplebar-react";
import AboutSkillsItem from "../components/about-skillsItem";

const About = () => {
  return (
    <SimpleBar className="w-full h-full rounded-2xl about shadow-md shadow-gray-400 pt-12 pb-12 pl-10 pr-10 overflow-scroll overflow-x-hidden">
      <h2 className="text-2xl font-medium title">About me</h2>
      <div className="about-section w-full mt-20 mb-20">
        <div className="wrap w-full flex flex-wrap">
          <div className="w-2/12">
            <div className="about__image max-w-[12rem] w-full max-h-[12rem] h-auto">
              <Image
                src="/assets/images/about_img.png"
                alt="My image"
                className="rounded-full block w-full h-full"
              />
            </div>
          </div>
          <div className="w-10/12 pl-5 pr-5">
            <h2 className="about__greeting text-black text-3xl font-bold">
              Hello,
            </h2>
            <p className="text-sx text-black opacity-40 mt-6 font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, quibusdam nesciunt veniam recusandae id dicta fuga
              ut adipisci voluptatum itaque corporis sapiente cupiditate
              consectetur?
            </p>
            <div className="about__infos mt-6 grid grid-cols-2">
              <p className="">
                <span className="text-black opacity-40 font-normal mr-1">
                  Name:
                </span>
                <span>Tohir</span>
              </p>
              <p className="">
                <span className="text-black opacity-40 font-normal mr-1">
                  Location:
                </span>
                <span>Uzbekistan-[Syrdarya],Kazakhstan-[Zhetisay]</span>
              </p>
              <p className="">
                <span className="text-black opacity-40 font-normal mr-1">
                  Birthday:
                </span>
                <span>18 December,1996</span>
              </p>
              <p className="">
                <span className="text-black opacity-40 font-normal mr-1">
                  Email:
                </span>
                <span>toxa@gmail.com</span>
              </p>
            </div>
            <div className="about__getInfos flex mt-5">
              <button className="flex items-center justify-center pt-2 pb-2 pr-3 pl-3 rounded-xl border border-white text-base text-white bg-red-500 hover:bg-blue-600 hover:border-transparent transition hover:duration-300">
                <span className="icon mr-2">
                  <i className="bi bi-cloud-download"></i>
                </span>{" "}
                Download CV
              </button>
              <button className="flex items-center justify-center pt-2 pb-2 pr-3 pl-3 rounded-xl border border-white text-base text-white ml-3 bg-blue-600 hover:bg-red-500 hover:border-transparent transition hover:duration-300">
                <span className="icon mr-2">
                  <i className="bi bi-envelope"></i>
                </span>{" "}
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="about__skills">
        <h2 className="text-2xl font-medium title about__skills-title">
          My skills
        </h2>
        <p className="text-sx text-black opacity-40 mt-6 font-normal">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics
        </p>
        <div className="about__skills-list grid grid-cols-5 gap-6 mt-10">
          <AboutSkillsItem title="Javascript">
            <Image
              src="/assets/icon/icons8-javascript.svg"
              alt="Javascript"
              className="max-w-[2rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="Css">
            <Image
              src="/assets/icon/icons8-css3.svg"
              alt="Css"
              className="max-w-[2rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="html">
            <Image
              src="/assets/icon/icons8-html-5.svg"
              alt="html"
              className="max-w-[2rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="react.js">
            <Image
              src="/assets/icon/icons8-react.svg"
              alt="react.js"
              className="max-w-[2rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="Next.js">
            <Image
              src="/assets/icon/nextjs-icon.svg"
              alt="Next.js"
              className="max-w-[2.5rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="vue.js">
            <Image
              src="/assets/icon/icons8-vue-js.svg"
              alt="Vue.js"
              className="max-w-[2rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="Nuxt.js">
            <Image
              src="/assets/icon/nuxtjs.svg"
              alt="Next.js"
              className="max-w-[4rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="Dart" iconClassName="s">
            <Image
              src="/assets/icon/dart.svg"
              alt="Dart"
              className="max-w-[2rem]"
            />
          </AboutSkillsItem>
          <AboutSkillsItem title="Flutter">
            <Image
              src="/assets/icon/icons8-flutter.svg"
              alt="Flutter"
              className="max-w-[2rem]"
            />
          </AboutSkillsItem>
        </div>
      </div>
    </SimpleBar>
  );
};

export default About;
