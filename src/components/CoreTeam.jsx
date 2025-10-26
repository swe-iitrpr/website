import React, { useRef } from "react";

const CoreTeam = () => {
  const presidents = [
    { name: "Kamakshi Gupta", role: "Vice-President", img: "/assets/kamakshi-didi.jpg" },
    { name: "Somya Katoch", role: "President", img: "/assets/somya-didi.jpg" },
    { name: "Ekam Sadhu", role: "Vice-President", img: "/assets/ekam-didi.jpg" },
  ];

  const coordinators = [
    { name: "Aashi Verma", role: "Tech Coordinator", img: "/assets/aa.jpg" },
    { name: "Amrutha", role: "Tech Coordinator", img: "/assets/amrutha.jpg" },
    { name: "Aneesh", role: "Planning & Outreach", img: "/assets/aneesh.jpg" },
    { name: "Hansika", role: "Planning & Outreach", img: "/assets/Hansika.jpg" },
    { name: "Tejaswi", role: "Planning & Outreach", img: "/assets/tejaswi(1).jpg" },
    { name: "Lahari", role: "Content Coordinator", img: "/assets/lahari.jpg" },
    { name: "Ritesh", role: "Content Coordinator", img: "/assets/Ritesh.jpg" },
    { name: "Sunitha", role: "Content Coordinator", img: "/assets/sunitha.jpg" },
    { name: "Bhavya", role: "Social Media", img: "/assets/bhavya.jpg" },
    { name: "Nehal", role: "Social Media", img: "/assets/nehal.jpg" },
    { name: "Prapti", role: "Social Media", img: "/assets/prapti.jpg" },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="core-team" className="py-12 max-w-6xl mx-auto px-6 hover:cursor-pointer">
      <h2 className="text-3xl font-extrabold text-center mb-8">Meet our Core Team</h2>

      <div className="flex justify-center flex-wrap gap-8 mb-12">
        {presidents.map((p, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden card-pop border-2 border-violet-400">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
            <p className="mt-3 font-semibold">{p.name}<br /><span className="text-sm text-gray-600">{p.role}</span></p>
          </div>
        ))}
      </div>

      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-3 py-1 text-2xl z-10">
          ‹
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 px-8 py-4 scrollbar-hide"
        >
          {coordinators.map((c, i) => (
            <div key={i} className="flex-shrink-0 w-40 text-center">
              {/* Choose rounded-full for circle or rounded-md for square */}
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full card-pop border-2 border-violet-400">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 font-semibold text-sm">{c.name}<br /><span className="text-xs text-gray-600">{c.role}</span></p>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-3 py-1 text-2xl z-10">
          ›
        </button>
      </div>
    </section>
  );
};

export default CoreTeam;
