/** @format */

import { useEffect } from "react";
import { useRef } from "react";
import SimpleBar from "simplebar-react";

function Resume() {
    const timelineLineRef = useRef(null);
    const timelineFirstRef = useRef(null);

    const timelineLineControl = () => {
        // console.log(timelineLineRef.current.offsetLeft);
        timelineLineRef.current.style.left = `${
            timelineFirstRef.current.clientWidth - 5
        }px`;
    };

    useEffect(() => {
        window.addEventListener("resize", timelineLineControl);

        return () => {
            window.removeEventListener("resize", timelineLineControl);
        };
    });

    useEffect(() => {
        timelineLineControl();
    }, []);
    // const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    // const dateString = new Date().toLocaleDateString("en-US", dateOptions);
    // console.log(dateString);
    return (
        <SimpleBar className="w-full h-full rounded-2xl services shadow-md shadow-gray-400 pt-12 pb-12 pl-3 pr-3 sm:pl-5 sm:pr-8 lg:pl-10 lg:pr-10 overflow-scroll overflow-x-hidden">
            <h2 className="text-2xl font-medium title services__title">
                Experience
            </h2>
            <div className="services__timeline mt-40 relative pt-14">
                <div className="services__timeline-entry h-[6rem]">
                    <div className="border-0" ref={timelineFirstRef}>
                        <h4 className="text-base font-normal text-gray-400 relative before:z-30 before:absolute before:top-[50%] before:border-2 before:border-red-500 before:right-0 before:translate-y-[-50%] before:w-[10px] before:h-[10px] before:rounded-full before:bg-white">
                            2013 - 2017
                        </h4>
                    </div>
                    <div className="xl:pl-12 xl:pr-12 lg:pl-9 lg:pr-9 border-0 pl-8 pr-4">
                        <h4 className="text-black font-bold text-xl">
                            Bachelor : Computer science
                        </h4>
                        <p className="mt-1 font-normal text-gray-400 text-lg">
                            Ontustik Kazakhstan Pedagogical University
                        </p>
                    </div>
                </div>
                <div className="services__timeline-entry h-[6rem]">
                    <div className="border-0">
                        <h4 className="text-base font-normal text-gray-400 relative before:z-30 before:absolute before:top-[50%] before:border-2 before:border-red-500 before:right-0 before:translate-y-[-50%] before:w-[10px] before:h-[10px] before:rounded-full before:bg-white">
                            2020 - 2021
                        </h4>
                    </div>
                    <div className="xl:pl-12 xl:pr-12 lg:pl-9 lg:pr-9 border-0 pl-8 pr-4">
                        <h4 className="text-black font-bold text-xl">
                            Web development
                        </h4>
                        <p className="mt-1 font-normal text-gray-400 text-lg">
                            ALICODE ACADEMY and Codeweb
                        </p>
                    </div>
                </div>
                <div className="services__timeline-entry h-[6rem]">
                    <div className="border-0">
                        <h4 className="text-base font-normal text-gray-400 relative before:z-30 before:absolute before:top-[50%] before:border-2 before:border-red-500 before:right-0 before:translate-y-[-50%] before:w-[10px] before:h-[10px] before:rounded-full before:bg-white">
                            2022 - 9/1/2022
                        </h4>
                    </div>
                    <div className="xl:pl-12 xl:pr-12 lg:pl-9 lg:pr-9 border-0 pl-8 pr-4">
                        <h4 className="text-black font-bold text-xl">
                            Frontend-developer
                        </h4>
                        <p className="mt-1 font-normal text-gray-400 text-lg">
                            I worked as a Frontend-developer in the Codeweb for
                            six month
                        </p>
                    </div>
                </div>
                <div className="services__timeline-entry h-[6rem]">
                    <div className="border-0">
                        <h4 className="text-base font-normal text-gray-400 relative before:z-30 before:absolute before:top-[50%] before:border-2 before:border-red-500 before:right-0 before:translate-y-[-50%] before:w-[10px] before:h-[10px] before:rounded-full before:bg-white">
                            9/1/2022 - Present
                        </h4>
                    </div>
                    <div className="xl:pl-12 xl:pr-12 lg:pl-9 lg:pr-9 border-0 pl-8 pr-4">
                        <h4 className="text-black font-bold text-xl">
                            Frontend-developer
                        </h4>
                        <p className="mt-1 font-normal text-gray-400 text-lg">
                            I have been working as a Frontend-developer in the
                            Adson since October 2022
                        </p>
                    </div>
                </div>
                <span
                    className="timeline-line z-10 absolute top-0 left-[20%] w-[1px] h-full bg-red-500 z-100 flex flex-col justify-between items-center before:block before:w-[8px] before:h-[8px] before:bg-red-500 before:rounded-full | after:block after:w-[8px] after:h-[8px] after:bg-red-500 after:rounded-full"
                    ref={timelineLineRef}
                ></span>
            </div>
        </SimpleBar>
    );
}

export default Resume;
