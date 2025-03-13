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
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  const handleButtonClick = (key) => {
    setActiveForm(key);
    setFormData({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = { formType: activeForm, ...formData };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setAlert({
          message:
            "Thank you for reaching out! Your submission was successful. A verification email has been sent to you—please check your inbox, and if you don’t see it, kindly check your spam folder.",
          type: "success",
          visible: true,
        });
      } else {
        setAlert({
          message:
            "Your request has failed. Please ensure your email is correct and that your network connection is stable. Try again in a few minutes. Thank you!",
          type: "error",
          visible: true,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({
        message: "Something went wrong. Please try again later.",
        type: "error",
        visible: true,
      });
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80 text-white p-10">
      <div className="text-center max-w-xl text-lg text-black">
        <h2 className="text-3xl font-bold mb-3">Work With Us</h2>
        <p>Choose an option below to get started.</p>
      </div>

      <div className="flex space-x-4 mt-6">
        {Object.keys(forms).map((key) => (
          <button
            key={key}
            onClick={() => handleButtonClick(key)}
            className={`px-6 py-3 font-semibold rounded-lg transition-all ${
              activeForm === key
                ? "bg-blue-500 shadow-lg shadow-blue-500"
                : "bg-[#D8CFC4]"
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

      <div className="mt-6 w-full max-w-[600px] mx-auto">
        {activeForm && (
          <div className=" p-6 rounded-2xl text-black">
            <h1 className="text-2xl font-bold mb-4">{forms[activeForm]?.text}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {forms[activeForm]?.fields.map((field) =>
                field.type === "select" ? (
                  <select key={field.name} name={field.name} onChange={handleChange} className="w-full p-3 bg-[#F1E8D6] rounded-lg">
                    <option value="" disabled selected>{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea key={field.name} name={field.name} onChange={handleChange} placeholder={field.placeholder} className="w-full p-3 bg-[#F1E8D6] rounded-lg h-32" />
                ) : (
                  <input key={field.name} name={field.name} type={field.type} onChange={handleChange} placeholder={field.placeholder} className="w-full p-3 bg-[#F1E8D6] rounded-lg" />
                )
              )}
              <button type="submit" className="w-full bg-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">Submit</button>
            </form>
          </div>
        )}
      </div>

      {alert.visible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className={`px-6 py-4 rounded-lg shadow-lg shadow-blue-500 text-center w-96 opacity-100 
            ${alert.type === "success" ? "bg-[#D8CFC4] text-black" : "bg-[#D8CFC4] text-black"}`}>
            <p>{alert.message}</p>
            <button
              className="mt-3 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
              onClick={() => setAlert({ ...alert, visible: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
