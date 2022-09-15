/** @format */
import SimpleBar from "simplebar-react";
import ServicesCard from "../components/services-card";
import { serviceData } from "../data";

const Services = ({ data }) => {
  return (
    <SimpleBar className="w-full h-full rounded-2xl services shadow-md shadow-gray-400 pt-12 pb-12 pl-3 pr-3 sm:pl-5 sm:pr-8 lg:pl-10 lg:pr-10 overflow-scroll overflow-x-hidden">
      <h2 className="text-2xl font-medium title services__title">Services</h2>
      <div className="services__cards mt-14 grid xl:grid-cols-3 sm:grid-cols-2 gap-5 lg:gap-10 sm:gap-7 md:gap-11 xl:gap-6 justify-around">
        {data.length > 0 &&
          data.map((item, indx) => (
            <ServicesCard
              title={item.title}
              text={item.text}
              iconclass={item.iconclass}
              key={indx}
            />
          ))}
      </div>
    </SimpleBar>
  );
};

export default Services;

export const getStaticProps = async () => {
  const data = await serviceData;

  return {
    props: {
      data,
    },
  };
};
