/** @format */

import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { worksData } from "../data";

function Works({ data = [] }) {
    const tabList = [
        { label: "All Prjects", content: "all", id: 0 },
        { label: "Website", content: "website", id: 1 },
        { label: "Web Application", content: "web-application", id: 2 },
        { label: "Mobile Application", content: "mobile-app", id: 3 },
    ];

    const [tabsListControl, setTabsListControl] = useState("all");
    const [tabsListClasses, setTabsListClasses] = useState({
        transform: "scale(1)",
        opacity: "1",
    });

    const [state, setState] = useState(data);

    function tabsListHandle(content) {
        if (!(content === tabsListControl)) {
            setTabsListControl(content);
            setTabsListClasses({ transform: "scale(.6)", opacity: "0" });

            setTimeout(() => {
                setTabsListClasses({ transform: "scale(1)", opacity: "1" });
            }, 400);
        }
    }

    useEffect(() => {
        setState(
            data.filter((item) => {
                if (tabsListControl === item.content) {
                    return true;
                } else if (tabsListControl == "all") {
                    return true;
                } else {
                    return false;
                }
            })
        );
    }, [data, tabsListControl]);

    return (
        <SimpleBar className="w-full h-full rounded-2xl works shadow-md shadow-gray-400 pt-12 pb-12 pl-3 pr-3 sm:pl-5 sm:pr-8 lg:pl-10 lg:pr-10 overflow-scroll overflow-x-hidden">
            <h2 className="text-2xl font-medium title works__title">
                Portfolio
            </h2>
            {/* <!-- works-tabs / --> */}
            <ul className="works__tabs mt-16 flex sm:flex-nowrap flex-wrap sm:justify-start justify-center">
                {tabList.map(({ label, id, content }) => (
                    <li
                        className={`works__tabs-item font-normal text-sm uppercase flex justify-center items-center rounded-md text-gray-500 pt-2 pb-2 pr-3 pl-3 cursor-pointer transition-all duration-200 mr-3 ${
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
            <div className="works__wrapper mt-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-[2rem] sm:gap-4">
                {state.length > 0 &&
                    state.map(({ id, title, text, imageSrc, link }) => (
                        <div
                            className="works__item w-full sm:h-[10rem] rounded-md overflow-hidden relative border border-gray-300"
                            style={{
                                ...tabsListClasses,
                            }}
                            key={id}
                        >
                            <div className="works__image rounded-md overflow-hidden">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    width={320}
                                    height={158}
                                    layout="responsive"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                            <div className="works__details absolute top-0 left-0 w-full h-full bg-[#ff6565e7] p-6 flex flex-col justify-between opacity-0">
                                <div className="works__details-header transition-all duration-600">
                                    <h4 className="works__details-title text-white text-lg font-medium">
                                        {title}
                                    </h4>
                                    <p className="works__details-text text-white text-sm font-normal">
                                        {text}
                                    </p>
                                </div>
                                <a
                                    href={link}
                                    target="_blank"
                                    className="works__see w-16 bg-white rounded-full flex justify-center items-center cursor-pointer transition-all"
                                    rel="noreferrer"
                                >
                                    <i className="bi bi-eye"></i>
                                    <span className="font-normal text-sm text-gray-500 ml-[0.4rem] transition-all duration-200">
                                        see
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
            {/* <!-- / works-wrapper --> */}

            {/* <!-- works IsSuccess / --> */}
            <div className="works__isSuccess grid md:grid-cols-3 -md:grid-cols-2 -sm:grid-cols-1 gap-10 mt-16">
                <div className="works__isSuccess-item h-[10rem] rounded-lg border border-transparent transition-all duration-300 hover:border-gray-200">
                    <span className="works__isSuccess-icon flex justify-center mt-3">
                        <i className="bi bi-emoji-smile"></i>
                    </span>
                    <div className="mt-3">
                        <h4 className="text-gray-500 text-center text-2xl font-bold">
                            15
                        </h4>
                        <p className="t text-gray-600 text-center mt-1 font-medium">
                            Happy Clients
                        </p>
                    </div>
                </div>

                <div className="works__isSuccess-item h-[10rem] rounded-lg border border-transparent transition-all duration-300 hover:border-gray-200">
                    <span className="works__isSuccess-icon flex justify-center mt-3">
                        <i className="bi bi-briefcase"></i>
                    </span>
                    <div className="mt-3">
                        <h4 className="text-gray-500 text-center text-2xl font-bold">
                            20
                        </h4>
                        <p className="t text-gray-600 text-center mt-1 font-medium">
                            Successul Projects
                        </p>
                    </div>
                </div>

                <div className="works__isSuccess-item h-[10rem] rounded-lg border border-transparent transition-all duration-300 hover:border-gray-200">
                    <span className="works__isSuccess-icon flex justify-center mt-3">
                        <i className="bi bi-trophy"></i>
                    </span>
                    <div className="mt-3">
                        <h4 className="text-gray-500 text-center text-2xl font-bold">
                            10
                        </h4>
                        <p className="t text-gray-600 text-center mt-1 font-medium">
                            Awards Received
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- works IsSuccess / --> */}
        </SimpleBar>
    );
}

export default Works;

export const getStaticProps = async () => {
    const data = await worksData;

    return {
        props: {
            data,
        },
    };
};
