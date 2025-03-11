"use client";

import { useState } from "react";

const forms = {
  developer: {
    text: "Hire a skilled developer for your project.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text" },
      { name: "association", placeholder: "Company/Organization", type: "text" },
      { name: "developerType", placeholder: "Type of Developer", type: "select", options: ["Frontend", "Backend", "Blockchain Developer", "Fullstack"] },
      { name: "employmentKind", placeholder: "Kind of Employment", type: "select", options: ["Remote", "On-site"] },
      { name: "employmentDuration", placeholder: "Duration of Employment", type: "select", options: ["0-6 months", "6-12 months", "More than 1 year"] },
      { name: "employmentType", placeholder: "Employment Type", type: "select", options: ["Part-time", "Full-time"] },
      { name: "message", placeholder: "Additional Message", type: "textarea" },
    ],
  },
  researcher: {
    text: "Collaborate with top researchers in your field.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text" },
      { name: "association", placeholder: "Company/Organization", type: "text" },
      { name: "workType", placeholder: "Type of Work", type: "select", options: ["Test Product", "Research Market", "Teach Blockchain", "Design a Curriculum", "Conduct Case Studies", "Analyze Blockchain Trends", "Develop Educational Content"] },
      { name: "message", placeholder: "Additional Message", type: "textarea" },
    ],
  },
  partner: {
    text: "Build strong partnerships with us.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text" },
      { name: "association", placeholder: "Company/Organization", type: "text" },
      { name: "partnershipType", placeholder: "Type of Partnership", type: "select", options: ["Host a Blockchain Function", "Be a Guest Speaker", "Sponsor Us", "Collaborate on Research", "Offer Internship Programs", "Provide Funding"] },
      { name: "message", placeholder: "Additional Message", type: "textarea" },
    ],
  },
};

export default function Carousel() {
  const [activeForm, setActiveForm] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = (key) => {
    setActiveForm(key);
    setIsFormVisible(true);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80 text-white p-10">
      
      {/* Section Description */}
      <div className="mb-6 text-center max-w-xl text-lg text-black">
        <h2 className="text-3xl font-bold mb-3">Work With Us</h2>
        <p>
          Whether you need a skilled developer, a researcher, or a strategic partner, we are here to help. 
          Choose an option below to get started.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(forms).map((key) => (
          <button
            key={key}
            onClick={() => handleButtonClick(key)}
            className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
              activeForm === key
                ? "bg-[#AFAFAF] shadow-lg shadow-blue-500"
                : "bg-[#D8CFC4] hover:bg-gray-600"
            }`}
          >
            {key === "developer"
              ? "Hire a Developer"
              : key === "researcher"
              ? "Work with a Researcher"
              : "Partner with Us"}
          </button>
        ))}
      </div>

      {/* Form */}
      {isFormVisible && (
        <div className="bg-[#EFE6DC] p-10 rounded-2xl w-[600px] mx-4 text-black text-center shadow-lg shadow-gray-900 animate-fadeIn">
          <h1 className="text-3xl font-bold mb-6">{forms[activeForm]?.text}</h1>
          <form className="space-y-4">
            {forms[activeForm]?.fields.map((field) =>
              field.type === "select" ? (
                <select
                  key={field.name}
                  className="w-full p-3 bg-[#D8CFC4] rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    {field.placeholder}
                  </option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  key={field.name}
                  placeholder={field.placeholder}
                  className="w-full p-3 bg-[#D8CFC4] text-black rounded-lg focus:ring-2 focus:ring-[#B98C6B] h-32"
                />
              ) : (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-3 bg-[#D8CFC4] text-black rounded-lg focus:ring-2 focus:ring-[#B98C6B]"
                />
              )
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
