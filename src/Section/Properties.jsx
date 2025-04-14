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

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full justify-center items-center">
          {property.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  {/* Image Box */}
                  <div
                    className="w-full h-[250px] rounded-t-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${item.images})` }}
                  >
                    {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-xl"></div> */}

                    {/* Top Badges */}
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
                      <FaShareAlt className="text-white text-lg cursor-pointer" />
                      <FaPlus className="text-white text-lg cursor-pointer" />
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="bg-gray-100 rounded-b-xl p-4 flex flex-col gap-2">
                    {/* Title + Price */}
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <h3 className="text-lg font-bold text-green-600">
                        ${item.price}
                      </h3>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-sm text-gray-500 gap-1">
                      <FaMapMarkedAlt />
                      <span>{item.address}</span>
                    </div>

                    {/* Info Row */}
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
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

                    {/* Agent/Owner */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
                      <FaUserCircle className="text-xl" />
                      <span>{item.owner}</span>
                    </div>
                    <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                      <FaVideo className="text-white text-lg bg-black bg-opacity-50 p-1 rounded-full cursor-pointer" />
                      <FaCamera className="text-white text-lg bg-black bg-opacity-50 p-1 rounded-full cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Properties;
