import React from "react";

const WhoAreWe = () => {
  return (
    <section id="who" className="w-full py-12 bg-gray-50">
      <div className="w-full text-center mb-6">
        <a
          href="#"
          className="inline-block text-purple-700 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium"
        >
          About SWE
        </a>
      </div>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          The Society of Women Engineers (SWE) is a professional organization dedicated to empowering women to
          achieve their full potential in careers as engineers and leaders. We inspire women to succeed and advance in
          engineering through advocacy, networking, and professional development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg text-center shadow-md">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-700 text-xl">👥</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              A supportive network of women in engineering across all disciplines and career stages.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center shadow-md">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-700 text-xl">🌐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Advocacy</h3>
            <p className="text-gray-600">
              Championing diversity and inclusion in engineering and technology fields worldwide.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center shadow-md">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-700 text-xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Promoting professional excellence through leadership development and mentorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;