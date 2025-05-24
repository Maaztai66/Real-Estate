import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import area1 from "../assets/area1.jpg";
import area2 from "../assets/area2.jpg";
import area3 from "../assets/area3.jpg";

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
    <div>
      <section
        id="popularareas"
        className="w-full m-auto bg-cover bg-red-200 bg-center rounded-xl flex justify-center mt-10 relative flex-col px-4 sm:px-6 lg:px-20 py-20 gap-20"
      >
        {/* Top Section */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {/* Heading */}
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

          {/* Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center col-span-2">
            {[area1, area2, area3].map((img, index) => (
              <div
                key={index}
                className="h-[300px] w-full max-w-[300px] bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${img})` }}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
              />
            ))}
          </div>
        </div>

        {/* Bottom Counters */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              data-aos="slide-up"
              data-aos-delay="200"
              className="flex justify-center items-center gap-8 w-full"
            >
              <h1 className="text-black text-7xl font-semibold leading-10">
                5K
              </h1>
              <h1>
                Active <br /> Listings
              </h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularArea;
