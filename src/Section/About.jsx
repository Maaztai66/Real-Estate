import React from "react";
import aboutimg from "../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const About = () => {

    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);

  return (
    <section
      className="w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 "
      id="about"
    >
      <div>
        <img
          data-aos="fade-right"
          src={aboutimg}
          alt="about"
          className="lg:w-[500px] lg:h-[600px] h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-6">
        <h1 data-aos="fade-right" className="text-red-500">
          WHO ARE WE
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-black text-[35px] font-semibold leading-10 text-left"
        >
          We Are Real Estate Agency in Los Santos, California 
         
        </h1>
        <p data-aos="fade-right" data-aos-delay="300" className="text-gray-500 text-xl text-justify">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button className="bg-red-900 text-white  h-10 w-30 rounded-lg mt-2 hover:bg-red-700 border transition duration-500 ease-in-out cursor-pointer">
            Read More
          </button>

      </div>
    </section>
  );
};

export default About;
