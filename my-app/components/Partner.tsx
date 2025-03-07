'use client';

import { useState } from 'react';

const forms = {
  developer: {
    text: 'Hire a skilled developer for your project.',
    fields: [
      { name: 'name', placeholder: 'Your Name', type: 'text' },
      { name: 'linkedin', placeholder: 'LinkedIn Profile', type: 'text' },
      { name: 'association', placeholder: 'Company/Organization', type: 'text' },
      { name: 'developerType', placeholder: 'Type of Developer', type: 'select', options: ['Frontend', 'Backend', 'Blockchain Developer', 'Fullstack'] },
      { name: 'employmentKind', placeholder: 'Kind of Employment', type: 'select', options: ['Remote', 'On-site'] },
      { name: 'employmentDuration', placeholder: 'Duration of Employment', type: 'select', options: ['0-6 months', '6-12 months', 'More than 1 year'] },
      { name: 'employmentType', placeholder: 'Employment Type', type: 'select', options: ['Part-time', 'Full-time'] },
    ],
  },
  researcher: {
    text: 'Collaborate with top researchers in your field.',
    fields: [
      { name: 'name', placeholder: 'Your Name', type: 'text' },
      { name: 'linkedin', placeholder: 'LinkedIn Profile', type: 'text' },
      { name: 'association', placeholder: 'Company/Organization', type: 'text' },
      { name: 'workType', placeholder: 'Type of Work', type: 'select', options: ['Test Product', 'Research Market', 'Teach Blockchain', 'Design a Curriculum', 'Conduct Case Studies', 'Analyze Blockchain Trends', 'Develop Educational Content'] },
    ],
  },
  partner: {
    text: 'Build strong partnerships with us.',
    fields: [
      { name: 'name', placeholder: 'Your Name', type: 'text' },
      { name: 'linkedin', placeholder: 'LinkedIn Profile', type: 'text' },
      { name: 'association', placeholder: 'Company/Organization', type: 'text' },
      { name: 'partnershipType', placeholder: 'Type of Partnership', type: 'select', options: ['Host a Blockchain Function', 'Be a Guest Speaker', 'Sponsor Us', 'Collaborate on Research', 'Offer Internship Programs', 'Provide Funding'] },
    ],
  },
};

export default function Carousel() {
  const [activeForm, setActiveForm] = useState('developer');

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white p-10">
      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(forms).map((key) => (
          <button
            key={key}
            onClick={() => setActiveForm(key)}
            className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300
              ${activeForm === key ? 'bg-blue-600 shadow-lg shadow-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            {key === 'developer' ? 'Hire a Developer' : key === 'researcher' ? 'Work with a Researcher' : 'Partner with Us'}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="bg-gray-800 p-10 rounded-2xl w-[600px] max-w-full text-center shadow-lg shadow-gray-900">
        <h1 className="text-3xl font-bold mb-6">{forms[activeForm].text}</h1>
        <form className="space-y-4">
          {forms[activeForm].fields.map((field) => (
            field.type === 'select' ? (
              <select key={field.name} className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            )
          ))}
          <button type="submit" className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">Submit</button>
        </form>
      </div>
    </div>
  );
}
