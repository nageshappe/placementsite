import React from 'react';

const memberships = [
  {
    name: "AICTE - Eduskills Foundation",
    description: "Facilitating industry internships and skill development opportunities through AICTE initiatives. Partnered with global companies for hands-on training, certifications, and placement support.",
    image: "/images/aicte-logo.png",
    link: "https://www.eduskillsfoundation.org/",
    stats: "2500+ students Completed Virtual Internships."
  },
  {
    name: "ICT Academy",
    description: "Bridging the skill gap with certifications, training programs, and placement drives.",
    image: "/images/ict-academy-logo.png",
    link: "https://ictacademy.in/",
    stats: "300+ students certified in emerging tech."
  },
  {
    name: "NASSCOM FutureSkills",
    description: "Upskilling platform for emerging tech domains, co-created with industry leaders.",
    image: "/images/nasscom-logo.png",
    link: "https://futureskillsprime.in/",
    stats: "400+ certified in AI/ML, Cloud, and Cybersecurity."
  },
];

const PlacementMemberships = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Professional Memberships Supporting Placements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {memberships.map((org, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:bg-gray-100 transition rounded-xl p-6 text-center shadow-md hover:shadow-xl flex flex-col items-center"
          >
            <img
              src={org.image}
              alt={org.name}
              width="20%"
              height="20%"
              className="h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              <a
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {org.name}
              </a>
            </h3>
            <p className="text-sm text-gray-500">{org.description}</p>
            <p className="text-xs text-indigo-600 font-medium mt-3">{org.stats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementMemberships;
