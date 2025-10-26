import React from "react";

const Mission = () => {
  return (
    <section id="mission" className="bg-purple-50 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <a
            href="#"
            className="inline-block text-purple-700 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium mb-5"
          >
           Our Mission
          </a>
          <h3 className="text-xl md:text-3xl font-bold text-center md:text-left mb-4 text-gray-800">
            Empowering Women Engineers
          </h3>
          <p className="text-center md:text-left text-gray-600 mb-6">
            Our mission is to support women in engineering by offering skill-building opportunities, mentorship, and an inclusive environment to enhance their careers.
          </p>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 text-purple-600">✔</span>
              Offer skill-building and mentorship programs
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-purple-600">✔</span>
              Promote an inclusive workplace culture
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/women-in-engineering.avif" // Replace with your image URL
            alt="Women in engineering"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
