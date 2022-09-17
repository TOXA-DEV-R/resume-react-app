/** @format */
import Typed from "react-typed";
import Link from "next/link";
import SimpleBar from "simplebar-react";

const Home = () => {
  const textLines = ["I'm Tohir Bobojonov", "I'm a Frontend-developer"];

  return (
    <SimpleBar className="home bg-blue-600 w-full h-full rounded-2xl flex items-center shadow-md shadow-gray-400">
      <div className="home__someInfos w-full mr-auto ml-auto lg:pl-24">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
          <Typed
            strings={["Welcome!", "My portfolio"]}
            typeSpeed={400}
            loop={true}
          />
        </h3>
        <p className="mt-5 text-white font-normal text-center text-xs sm:text-base lg:text-left">
          <Typed strings={textLines} typeSpeed={150} loop={true} />
        </p>
        <div className="home__links flex justify-center lg:justify-start mt-8">
          <Link href="/works" passHref>
            <a className="home__link flex items-center justify-center text-sm lg:pt-3 lg:pb-3 lg:pr-5 lg:pl-5 pt-2 pb-2 pr-3 pl-3 sm:pt-2 sm:pb-2 sm:pr-4 sm:pl-4 rounded-3xl lg:text-base text-white bg-red-500 hover:bg-blue-500 hover:border-transparent transition-all translate-y-0 hover:-translate-y-1 hover:duration-300 shadow-none hover:shadow-lg">
              <span className="icon mr-2">
                <i className="bi bi-grid-fill"></i>
              </span>
              View PortFolio
            </a>
          </Link>
          <Link href="/works" passHref>
            <a className="home__link flex items-center justify-center text-sm lg:pt-3 lg:pb-3 lg:pr-5 lg:pl-5 pt-2 pb-2 pr-3 pl-3 sm:pt-2 sm:pb-2 sm:pr-4 sm:pl-4 rounded-3xl border border-white lg:text-base text-white ml-3 hover:bg-white hover:text-black hover:border-transparent transition-all translate-y-0 hover:-translate-y-1 hover:duration-300">
              <span className="icon mr-2">
                <i className="bi bi-envelope"></i>
              </span>
              Contcat me
            </a>
          </Link>
        </div>
      </div>
    </SimpleBar>
  );
};

export default Home;
