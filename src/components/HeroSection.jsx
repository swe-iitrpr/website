import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-purple-700 text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Shape the Future of Engineering
            </h2>
            <p className="mt-4 text-purple-200">
              Brains. Boldness. Blueprints. Welcome to Women in Engineering at IIT Ropar.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a href="#events" className="px-5 py-2 border border-white text-white rounded-lg">
                Upcoming Events
              </a>
              <a href="#who" className="px-5 py-2 bg-white text-purple-700 rounded-lg">
                Who are we
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/hero-illustration.jpg" // Replace with your image URL
              alt="Women in engineering"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;