import React from "react";

const AllEvents = () => {
  const allEvents = [
    { title: "Session on GenAI", date: null, desc: "Explore the future of Generative AI.", photo: "/assets/genai.jpg" },
    { title: "Resume and LinkedIn Workshop", date: null, desc: "Build your professional profile.", photo: "/assets/resume.avif" },
    { title: "Project - 2", date: null, desc: "Collaborative engineering project.", photo: "/assets/project2.jpg" },
    { title: "Session on Well-being and Self Care", date: null, desc: "Fun activities for mental health.", photo: "/assets/wellbeing.jpg" },
    { title: "Hackathon 1.0", date: "2025-04-15", desc: "Completed 24-hour innovation challenge.", photo: "/assets/hackathon1.jpg" },
    { title: "Mock Interviews + CV Building", date: null, desc: "Prepare for higher opportunities.", photo: "/assets/mockinterviews.jpg" },
    { title: "Portfolio Workshop", date: "2025-01-15", desc: "Create your engineering portfolio.", photo: "/assets/portfolio.jpg" },
    { title: "Session on Trading and Stocks", date: "2025-01-20", desc: "Learn financial skills.", photo: "/assets/trading.jpg" },
    { title: "Project - 4", date: "2025-03-10", desc: "Advanced project development.", photo: "/assets/project4.jpg" },
    { title: "Mock Interviews", date: "2025-03-15", desc: "Practice for job roles.", photo: "/assets/mockinterviews2.jpg" },
    { title: "Hackathon 2.0", date: "2025-04-05", desc: "Innovation challenge with prizes.", photo: "/assets/hackathon2.jpg" },
    { title: "Mock Interviews + Summer Intern Guidelines", date: "2025-04-20", desc: "Texas Instruments and Salesforce opportunities.", photo: "/assets/interns.jpg" },
  ];

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-purple-700">
          All Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allEvents.map((event, index) => (
            <div key={index} className="bg-purple-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={event.photo}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-purple-800 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-3">{event.desc}</p>
                <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {event.date
                    ? new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "TBD"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
