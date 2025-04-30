import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-20 ">
      <div className="bg-amber-100 shadow-lg rounded-xl p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-around space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col items-center text-gray-600">
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p className="text-lg">+91 8433XXXXXX</p>
          </div>

          <div className="flex flex-col items-center text-gray-600">
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-lg">devlopstinder@gmail.com</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or concerns, feel free to contact us. We are here to assist you.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-800 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-800 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-800 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-gray-600 mt-8">
          © {new Date().getFullYear()} Devlopstinder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
