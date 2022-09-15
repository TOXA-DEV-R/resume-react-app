/** @format */

import SimpleBar from "simplebar-react";

const Resume = () => {
  return (
    <SimpleBar className="w-full h-full rounded-2xl services shadow-md shadow-gray-400 pt-12 pb-12 pl-3 pr-3 sm:pl-5 sm:pr-8 lg:pl-10 lg:pr-10 overflow-scroll overflow-x-hidden">
      <h2 className="text-2xl font-medium title services__title">Experience</h2>
      <div className="services__timeline mt-40">
        <div className="services__timeline-entry flex h-[10rem]">
          <div className="s w-2/12">
            <h4 className="text-sm font-normal text-gray-400 -translate-y-1">
              2019 - Present{" "}
            </h4>
          </div>
          <div className="w-[1px] bg-[red] relative">
            <div className="absolute w-[1px] h-[5rem] bg-[red] -translate-y-[5rem] after:absolute after:w-2 after:h-2 after:bg-[red] after:rounded-full after:top-0 after:left-[50%] after:translate-x-[-50%]"></div>
            <div className="absolute w-3 h-3 bg-[red] rounded-full top-0 left-[50] translate-x-[-50%] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full flex justify-center items-center"></div>
          </div>
          <div className="pl-12 pr-12">
            <h4 className="text-black font-bold -translate-y-3 text-2xl">
              Academic Degree
            </h4>
            <p className="mt-1 font-normal text-gray-400 text-lg">
              Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
              commodo ligula eget dolor aenean massa.
            </p>
          </div>
        </div>
        <div className="services__timeline-entry flex h-[10rem]">
          <div className="s w-2/12">
            <h4 className="text-sm font-normal text-gray-400 -translate-y-1">
              2019 - Present{" "}
            </h4>
          </div>
          <div className="w-[1px] bg-[red] relative">
            <div className="absolute w-3 h-3 bg-[red] rounded-full top-0 left-[50] translate-x-[-50%] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full flex justify-center items-center"></div>
          </div>
          <div className="pl-12 pr-12">
            <h4 className="text-black font-bold -translate-y-3 text-2xl">
              Academic Degree
            </h4>
            <p className="mt-1 font-normal text-gray-400 text-lg">
              Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
              commodo ligula eget dolor aenean massa.
            </p>
          </div>
        </div>
        <div className="services__timeline-entry flex h-[10rem]">
          <div className="s w-2/12">
            <h4 className="text-sm font-normal text-gray-400 -translate-y-1">
              2019 - Present{" "}
            </h4>
          </div>
          <div className="w-[1px] bg-[red] relative">
            <div className="absolute w-[1px] h-[5rem] bg-[red] translate-y-[5rem] after:absolute after:w-2 after:h-2 after:bg-[red] after:rounded-full after:bottom-0 after:left-[50%] after:translate-x-[-50%]"></div>
            <div className="absolute w-3 h-3 bg-[red] rounded-full top-0 left-[50] translate-x-[-50%] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full flex justify-center items-center"></div>
          </div>
          <div className="pl-12 pr-12">
            <h4 className="text-black font-bold -translate-y-3 text-2xl">
              Academic Degree
            </h4>
            <p className="mt-1 font-normal text-gray-400 text-lg">
              Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
              commodo ligula eget dolor aenean massa.
            </p>
          </div>
        </div>
      </div>
    </SimpleBar>
  );
};

export default Resume;
