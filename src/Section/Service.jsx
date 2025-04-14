import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { service } from "../components/export";

const Service = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="pb-20">
      <section
        id="services"
        className="lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 py-20  gap-10 bg-pink-200"
      >
        <div className="flex flex-col justify-center items-start gap-4 ">
          <h1 data-aos="zoom-in" className="text-red-500">
            Our Service
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10 text-justify"
          >
            Top Real Estate
            <br />
            Services Available
          </h1>
        </div>
        <div
          id="service-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 leading-5"
        >
          {
            // service data

            service.map((item, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="bg-white border-b-[5px] hover:bg-red-300 cursor-pointer flex flex-col justify-center items-start gap-4 h-[350px] px-8 py-16 rounded-xl shadow-md "
                >
                  {/* Add content for each service item here */}
                  <div className="p-6 rounded-full bg-red-200">
                    <item.icon className="text-red-600 size-10 transform hover:scale-110 transition duration-200 cursor-pointer" />
                  </div>
                  <h1 className="text-black text-[22px] font-semibold ">
                    {item.title}
                  </h1>
                  <p className="text-lg text-slate-700 ">{item.desc} </p>
                  <button className="border-b-2 border-red-600 text-red-600 font-semibold cursor-pointer ">Read More</button>
                </div>
              );
            })
          }
        </div>
      </section>
    </div>
  );
};

export default Service;
