/** @format */

import Image from "next/image";
import React from "react";
import SimpleBar from "simplebar-react";
import AboutSkillsItem from "../components/about-skillsItem";

import Link from "next/link";

const About = () => {
    const fileUrl = "/assets/files/Tohir Bobojonov.pdf";
    const filename = "Tohir Bobojonov resume.pdf";

    return (
        <SimpleBar className="w-full h-full rounded-2xl about shadow-md shadow-gray-400 pt-12 pb-12 pl-3 pr-3 sm:pl-5 sm:pr-8 lg:pl-10 lg:pr-10 overflow-scroll overflow-x-hidden">
            <h2 className="text-2xl font-medium title">About me</h2>
            <div className="about-section w-full mt-20 mb-20">
                <div className="wrap w-full flex flex-col md:flex-row items-center md:flex-nowrap">
                    <div className="max-w-[172px] w-full">
                        <div className="about__image max-w-[12rem] w-full max-h-[12rem] h-auto">
                            <Image
                                src="/assets/images/about_img.png"
                                alt="My image"
                                width={166}
                                height={166}
                                className="rounded-full"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full xl:w-10/12 pl-5 pr-5">
                        <h2 className="about__greeting text-black text-3xl font-bold text-center md:text-start mt-3 md:mt-0">
                            {`Hello, I'm a Frontend-developer.`}
                        </h2>
                        <p className="text-sx text-black opacity-40 mt-6 font-normal md:text-start text-center">
                            {`I'm`} a Frontend-developer{" "}
                            <a
                                href="https://codeweb.uz/"
                                target="_blank"
                                rel="noreferrer"
                                className="underline"
                            >
                                Codeweb
                            </a>
                            . I have more than 3 month Of Experience. I am
                            passionate about building excellent software that
                            improves the lives of those around me. I specialize
                            in creating web application for clients ranging from
                            individuals and small-businesses. What would you do
                            if you had a Frontend-developer expert available at
                            your fingertips?
                        </p>
                        <div className="about__infos mt-6 grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-0">
                            <p className="md:text-start text-center">
                                <span className="text-black opacity-40 font-normal mr-1">
                                    Name:
                                </span>
                                <span>Tohir</span>
                            </p>
                            <p className="md:text-start text-center">
                                <span className="text-black opacity-40 font-normal mr-1">
                                    Location:
                                </span>
                                <span>
                                    Uzbekistan-[Syrdarya],Kazakhstan-[Zhetisay]
                                </span>
                            </p>
                            <p className="md:text-start text-center">
                                <span className="text-black opacity-40 font-normal mr-1">
                                    Birthday:
                                </span>
                                <span>18 December,1996</span>
                            </p>
                            <p className="md:text-start text-center">
                                <span className="text-black opacity-40 font-normal mr-1">
                                    Email:
                                </span>
                                <span>toxa@gmail.com</span>
                            </p>
                        </div>
                        <div className="about__getInfos flex flex-col items-center sm:flex-row justify-center md:justify-start md:items-start  mt-5">
                            <a
                                href={fileUrl}
                                className="flex items-center justify-center pt-2 pb-2 pr-3 pl-3 rounded-xl border border-white text-base text-white bg-red-500 hover:bg-blue-600 hover:border-transparent transition hover:duration-300"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="icon mr-2">
                                    <i className="bi bi-cloud-download"></i>
                                </span>
                                Download CV
                            </a>
                            <Link href="/contact">
                                <a className="flex items-center justify-center pt-2 pb-2 pr-3 pl-3 rounded-xl border border-white text-base text-white sm:ml-3 sm:mt-0 mt-4 bg-blue-600 hover:bg-red-500 hover:border-transparent transition hover:duration-300">
                                    <span className="icon mr-2">
                                        <i className="bi bi-envelope"></i>
                                    </span>
                                    Hire Me
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__skills">
                <h2 className="text-2xl font-medium title about__skills-title md:text-start text-center">
                    IT Skills
                </h2>
                <p className="text-sx text-black opacity-40 mt-6 font-normal md:text-start text-center"></p>
                <div className="about__skills-list grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 sm:gap-6 mt-10">
                    <AboutSkillsItem
                        title="Javascript"
                        imgSrc="/assets/icon/icons8-javascript.svg"
                        widthImage={48}
                        heightImage={48}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="Css"
                        imgSrc="/assets/icon/icons8-css3.svg"
                        widthImage={48}
                        heightImage={48}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="html"
                        imgSrc="/assets/icon/icons8-html-5.svg"
                        widthImage={48}
                        heightImage={48}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="react.js"
                        imgSrc="/assets/icon/icons8-react.svg"
                        widthImage={40}
                        heightImage={40}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="Next.js"
                        imgSrc="/assets/icon/nextjs-icon.svg"
                        widthImage={50}
                        heightImage={25}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="vue.js"
                        imgSrc="/assets/icon/icons8-vue-js.svg"
                        widthImage={45}
                        heightImage={40}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="Nuxt.js"
                        imgSrc="/assets/icon/nuxtjs.svg"
                        widthImage={65}
                        heightImage={35}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="Dart"
                        imgSrc="/assets/icon/dart.svg"
                        widthImage={36}
                        heightImage={36}
                    ></AboutSkillsItem>
                    <AboutSkillsItem
                        title="Flutter"
                        imgSrc="/assets/icon/icons8-flutter.svg"
                        widthImage={36}
                        heightImage={30}
                    ></AboutSkillsItem>
                </div>
            </div>
        </SimpleBar>
    );
};

export default About;
