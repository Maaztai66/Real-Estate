import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkedAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
const Properties = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="">
      <section
        className="Lg;w-[90%] m-auto lg:px-20 px-10 py-20 w-full flex flex-col justify-center items-start gap-10 "
        id="properties"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="fade-right" className="text-red-500 font-semibold">
            PROPERTIES
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-black text-[35px] font-semibold leading-10 text-left"
          >
            Explore Our Properties
          </h1>
        </div>

        {/* properties grid start here */}

        <div
  className="relative w-full min-h-[420px] rounded-xl overflow-hidden shadow-md flex flex-col"
  data-aos="zoom-in"
  data-aos-delay="300"
>
  {/* Image Section */}
  <div
    className="w-full h-[250px] bg-cover bg-center relative"
    style={{ backgroundImage: `url(${item.images})` }}
  >
    {/* Top Left Badges */}
    <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
        For Sale {item.type}
      </span>
      <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
        Featured
      </span>
    </div>

    {/* Top Right Icons */}
    <div className="absolute top-2 right-2 flex flex-col items-center gap-2 z-10">
      <FaShareAlt className="text-white text-sm md:text-lg cursor-pointer" />
      <FaPlus className="text-white text-sm md:text-lg cursor-pointer" />
    </div>
  </div>

  {/* Details Section */}
  <div className="bg-gray-100 flex-grow p-4 flex flex-col gap-2 relative">
    <div className="flex justify-between items-center">
      <h2 className="text-base font-semibold text-gray-800">{item.name}</h2>
      <h3 className="text-base font-bold text-green-600">${item.price}</h3>
    </div>

    <div className="flex items-center text-sm text-gray-500 gap-1">
      <FaMapMarkedAlt />
      <span>{item.address}</span>
    </div>

    <div className="flex justify-between text-sm mt-2 text-gray-700 flex-wrap gap-2">
      <div className="flex items-center gap-1">
        <FaBed /> {item.bed} Beds
      </div>
      <div className="flex items-center gap-1">
        <FaBath /> {item.bath} Baths
      </div>
      <div className="flex items-center gap-1">
        <MdSpaceDashboard /> {item.area}
      </div>
    </div>

    <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
      <FaUserCircle className="text-lg" />
      <span>{item.owner}</span>
    </div>

    {/* Bottom Right Icons */}
    <div className="absolute bottom-3 right-3 flex gap-2">
      <FaVideo className="text-white text-sm md:text-lg bg-black bg-opacity-60 p-1 rounded-full cursor-pointer" />
      <FaCamera className="text-white text-sm md:text-lg bg-black bg-opacity-60 p-1 rounded-full cursor-pointer" />
    </div>
  </div>
</div>

      </section>
    </div>
  );
};

export default Properties;
