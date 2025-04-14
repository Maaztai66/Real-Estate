import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-40 bg-gray-50 ">
      <div className="text-center mb-10">
        <h2 className="text-teal-600 text-sm font-semibold">CONTACT US</h2>
        <h1 className="text-3xl font-bold text-gray-800">Get In Touch</h1>
        <p className="text-gray-500 mt-2">We’d love to hear from you!</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 bg-white shadow-md p-6 rounded-xl">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-teal-600 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold items-start flex text-gray-800">Address</h3>
              <p className="text-gray-600">123 Dream Street, Los Santos, CA</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-teal-600 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold flex center text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-teal-600 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold flex center text-gray-800">Email</h3>
              <p className="text-gray-600">info@realnest.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md p-6 rounded-xl flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* focusl :outline-none
          Don’t show the blue border when I click or tap on this input or button."
          Browsers add a blue glow or border when you click in an input field. */}


          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
