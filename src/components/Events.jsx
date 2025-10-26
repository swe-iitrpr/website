import React, { useState, useEffect } from "react";

const Events = () => {
  // Event data
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

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);

  useEffect(() => {
    const now = new Date("2025-10-25T23:06:00+05:30"); // current date/time
    const updatedUpcoming = [];
    const updatedCompleted = [];

    allEvents.forEach(event => {
      if (!event.date || new Date(event.date) > now) {
        updatedUpcoming.push(event);
      } else {
        updatedCompleted.push(event);
      }
    });

    setUpcomingEvents(updatedUpcoming);
    setCompletedEvents(updatedCompleted);
  }, []);

  return (
    <section id="events" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full text-center mb-6">
          <span className="inline-block text-purple-700 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium">
            Events & Programs
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-center mb-6">Upcoming Events</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Join us for workshops, networking events, and professional development opportunities throughout the year.
        </p>

        {/* Show top 3 upcoming events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.slice(0, 3).map((event, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              {event.photo && (
                <img src={event.photo} alt={event.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              )}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-violet-700">{event.title}</h2>
                {event.date ? (
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                ) : (
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">TBD</span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{event.desc}</p>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <a
            href="/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-700 text-white rounded-lg text-lg font-medium hover:bg-purple-800 transition"
          >
            View Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
