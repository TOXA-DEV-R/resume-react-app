/** @format */

import React from "react";
import SimpleBar from "simplebar-react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formHandle = async (values) => {
    let data = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        reset({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SimpleBar className="w-full h-full rounded-2xl contact shadow-md shadow-gray-400 pt-12 pb-12 pl-3 pr-3 sm:pl-5 sm:pr-8 lg:pl-10 lg:pr-10 overflow-scroll overflow-x-hidden">
      <h2 className="text-2xl font-medium title works__title">Get in touch</h2>
      <div className="contact__inputs flex -md:flex-col -md:items-center -sm:flex-col-reverse  md:justify-between mt-20">
        <div className="md:w-3/12 -md:flex -md:w-full -md:justify-around -sm:mt-16 -sm:grid -sm:grid-cols-1 -sm:gap-4">
          <div className="flex">
            <span className="icon">
              <i className="bi bi-telephone"></i>
            </span>
            <div className="ml-3">
              <span className="text-md text-black font-medium">Phone</span>
              <p className="text-sm text-gray-400 font-normal mt-1">
                +7781001543
              </p>
            </div>
          </div>
          <div className="flex md:mt-7">
            <span className="icon">
              <i className="bi bi-envelope"></i>
            </span>
            <div className="ml-3">
              <span className="text-md text-black font-medium">
                Email address
              </span>
              <p className="text-sm text-gray-400 font-normal mt-1">
                hello@bako.com
              </p>
            </div>
          </div>
          <div className="flex md:mt-7">
            <span className="icon">
              <i className="bi bi-geo-alt"></i>
            </span>
            <div className="ml-3">
              <span className="text-md text-black font-medium">Location</span>
              <p className="text-sm text-gray-400 font-normal mt-1">
                West Palm Beach, 4669 Travis Street
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(formHandle)}
          className="md:w-8/12 -md:w-full -sm:flex -sm:flex-col -sm:items-center"
        >
          <div className="grid grid-cols-2 gap-x-5 -sm:w-full contact__input-top">
            <input
              type="text"
              placeholder="Your name"
              className="border rounded-lg pl-3 pr-3 h-[2.5rem] outline-none hover:border-gray-400 placeholder:text-sm placeholder:text-gray-400 text-sm text-gray-700 font-normal transition-all duration-300"
              {...register("name", {
                required: true,
                min: 2,
              })}
            />
            <input
              type="text"
              placeholder="Email address"
              className="border rounded-lg pl-3 pr-3 h-[2.5rem] outline-none hover:border-gray-400 placeholder:text-sm placeholder:text-gray-400 text-sm text-gray-700 font-normal transition-all duration-300"
              {...register("email", {
                required: true,
                min: 5,
              })}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-lg pl-3 pr-3 h-[2.5rem] outline-none hover:border-gray-400 placeholder:text-sm placeholder:text-gray-400 text-sm text-gray-700 font-normal w-full mt-5 transition-all duration-300"
            {...register("subject", {
              required: true,
              min: 2,
            })}
          />
          <textarea
            placeholder="Message..."
            className="border rounded-lg p-3 h-[7rem] outline-none hover:border-gray-400 placeholder:text-sm placeholder:text-gray-400 text-sm text-gray-700 font-normal w-full mt-5 transition-all duration-300 resize-none"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#f85a5a] rounded-lg h-[2.3rem] pl-4 pr-4 text-white mt-5 text-sm hover:bg-blue-600 translate-y-0 transition-all duration-300 hover:-translate-y-1"
          >
            Submit Message
          </button>
        </form>
      </div>
    </SimpleBar>
  );
};

export default Contact;
