import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { client } from "../components/export";
import { FaUserCircle } from "react-icons/fa";

const Clients = () => {
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
        id="client"
        className=" lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl justify-center flex flex-col items-center lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col  justify-center gap-10">
          <h1 data-aos="zoom-in" className="text-red-500">
            Our Clients
          </h1>
          <h1 className="text-black text-[40px] font-semibold leading-10 text-justify">
            What Our Clients Saying about us
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full justify-center items-center">
          {client.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col items-center justify-center gap-5 bg-white rounded-xl shadow-lg p-10 hover:bg-red-100 cursor-pointer"
            >
              <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-red-500 text-white text-[30px]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt="client"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-[40px]" />
                )}
              </div>
              <h1 className="text-black text-[20px] font-semibold">
                {item.name}
              </h1>
              <p className="text-gray-600 text-[16px] text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
