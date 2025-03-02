import React from "react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      company: "LIKELION Vietnam",
      position: "Fresher UX/UI Web Design",
      period: "06/2024 - 10/2024",
      description:
        "Worked on various UX/UI projects, focusing on user-centered design principles.",
      logo: "/logos/likelion.png", // Update with actual logo path
    },
    {
      company: "Vietnam People's Army",
      position: "Serve the Army",
      period: "2022 – 01/2024",
      description:
        "Served in various capacities, developing leadership and teamwork skills.",
      logo: "/logos/vpa.png", // Update with actual logo path
    },
    {
      company: "25h Studio",
      position: "Graphic Designer",
      period: "05/2020 – 09/2021",
      description:
        "Created visual content for various clients, enhancing brand identity.",
      logo: "/logos/25hstudio.png", // Update with actual logo path
    },
  ];

  return (
    <section
      id="professional-experience"
      className="container mx-auto px-4 py-12"
    >
      <h2 className="mb-8 text-3xl font-bold uppercase text-blue-500">
        Professional Experience
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="h-12 w-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {exp.position}
                </h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            </div>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
