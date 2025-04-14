import React from "react";
import heroimg from "../assets/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { useDarkMode } from "../components/DarkModeContext";

const Hero = () => {
  // useEffect is a React hook that allows you to perform side effects in function components. It is called after the component has rendered and can be used to manage things like data fetching, subscriptions, or manually changing the DOM.
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  // const [darkMode, setDarkMode] = useDarkMode();
  // className={`${darkMode ? "dark bg-black" : "light bg-white"}`}

  return (
    <>
      <div>
        <section
          id="home"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center mt-10 relative flex-col items-start lg:px-28  px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] sm:leading-60px"
          >
            Find Your Dream Home in Los Santos
          </h1>
          <p
            data-aos="fade-up"
            className="text-white text-lg lg:pr-[500px] pr-0"
          >
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, cumque earum, delectus, quos doloribus commodi
          </p>
        </section>
      </div>

      {/* form starts from here */}
      <div>
      <div
  data-aos="fade-up"
  className="relative z-30 bg-red-900 lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14"
  id="form"
>

          <div className="w-full">
            <h1 className=" font-semibold dark:text-white">Location</h1>
            <input
              type="text"
              className="w-full h-10 rounded-lg mt-2 text-black bg-white border-3"
              placeholder="Enter an address,State, City or Pincode"
            />
          </div>
          <div className="w-full">
            <h1 className=" font-semibold dark:text-white">TYPE OF PROPERTY</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="text-black w-full h-10 rounded-lg mt-2  bg-white border-3"
            >
             <option value="" disabled>Select Property</option>
             <option value="option2">Rentals</option>
             <option value="option2">Sales</option>
              <option value="option2">Commercials</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className=" font-semibold dark:text-white">Categories</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="text-black w-full h-10 rounded-lg mt-2  bg-white border-3"
            >
             <option value="" disabled>Property Categories</option>
             <option value="option2">Apartments</option>
             <option value="option2">Flats</option>
              <option value="option2">Duplex</option>
              <option value="option2">Tenament</option>
              <option value="option2">Penthouse</option>
              <option value="option2">Villas</option>
            </select>
          </div>

{/* button */}
          <div className="w-full mt-6">
          <button className="bg-red-900 text-white w-full h-10 rounded-lg mt-2 hover:bg-red-700 border transition duration-500 ease-in-out cursor-pointer">
            Submit
          </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
