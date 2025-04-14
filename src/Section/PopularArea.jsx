import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import area1 from "../assets/area1.jpg";
import area2 from "../assets/area2.jpg";
import area3 from "../assets/area3.jpg";
import { useEffect } from "react";

const PopularArea = () => {
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
      <section id="popularareas" className="lg:w-[90%] w-full m-auto bg-cover bg-red-200 bg-center rounded-xl flex justify-center mt-10 relative flex-col lg:px-20  px-6  py-20 gap-20">
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-red-500 text-[30px] font-semibold leading-10 text-justify"
            >
              Popular Area
            </h1>
            <h1
              className="text-black text-[40px] font-semibold leading-10 text-justify"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Explore most <br />
              Popular Areas
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 justify-center items-center gap-6">
            <div
              className="h-[300px] w-[90%] sm:w-[300px] bg-cover bg-center rounded-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
              style={{ backgroundImage: `url(${area1})` }}
            ></div>
            <div
              className="h-[300px] w-[90%] sm:w-[300px] bg-cover bg-center rounded-xl"
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area2})` }}
            ></div>
            <div
              className="h-[300px] w-[90%] sm:w-[300px] bg-cover bg-center rounded-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
              style={{ backgroundImage: `url(${area3})` }}
            ></div>
          </div>
        </div>

        <div
          id="bottom"
          className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6"
        >
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-7xl font-semibold leading-10 ">
              5K
            </h1>
            <h1>Active <br/>Listings</h1>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-7xl font-semibold leading-10 ">
              5K
            </h1>
            <h1>Active <br/>Listings</h1>
            
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-7xl font-semibold leading-10 ">
              5K
            </h1>
            <h1>Active <br/>Listings</h1>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularArea;
