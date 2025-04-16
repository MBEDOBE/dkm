import { useState } from "react";

const tabs = ["Skill", "Experience", "Education", "Interest"];

const tabContent = {
  Skill: [
    {
      title: "React Js",
      description: "Building modern and responsive frontend applications.",
    },
    {
      title: "MERN Stack",
      description:
        "Developing full-stack web apps using MongoDB, Express, React, and Node.js.",
    },
    {
      title: "Tailwind CSS, Bootstrap",
      description: "Rapid UI styling with utility-first CSS.",
    },
    {
      title: "HTML5 / CSS3 / Sass",
      description: "Crafting clean and accessible web pages.",
    },
    {
      title: "JavaScript / TypeScript",
      description: "Dynamic and typed client-side logic.",
    },
    {
      title: "Data Entry",
      description: "Accurate, fast entry and processing of large data sets.",
    },
    {
      title: "CMS (WordPress)",
      description: "Building and managing content-heavy websites.",
    },
  ],
  Experience: [
    {
      title: "Frontend Developer",
      description:
        "Designed and built responsive web interfaces using React, Tailwind, and WordPress for various clients.",
      subtitle: "Freelance | 2021 - Present",
    },
    {
      title: "Data Entry Assistant",
      description:
        "Managed entry of community survey data, maintained accuracy, and supported team with reports.",
      subtitle: "Yendi Peace Centre | 2019 - 2021",
    },
    {
      title: "Web Developer Intern",
      description:
        "Contributed to UI updates and content management system development for educational outreach.",
      subtitle: "AspireEd Project | 2018",
    },
  ],
  Education: [
    {
      title: "University of Ghana",
      description:
        "Bachelor’s in Information Studies – focused on digital information systems and data management.",
    },
    {
      title: "Udemy / Coursera",
      description:
        "Completed online certifications in React, JavaScript, and frontend web development.",
    },
  ],
  Interest: [
    {
      title: "Creative Coding",
      description:
        "Experimenting with generative design and frontend animations.",
    },
    {
      title: "UX Design",
      description: "Exploring user journeys and interface aesthetics.",
    },
    {
      title: "Community Volunteering",
      description: "Helping NGOs with digital presence and admin support.",
    },
    {
      title: "Photography",
      description:
        "Capturing moments from nature and daily life for visual storytelling.",
    },
  ],
};

const About = () => {
  const [activeTab, setActiveTab] = useState("Skill");

  return (
    <section className="flex flex-col items-center justify-between w-full max-w-screen-xl min-h-screen gap-10 px-6 py-12 mx-auto text-white lg:flex-row">
      {/* Left: Bio */}
      <div className="space-y-6 lg:w-1/2">
        <h1 className="text-4xl font-bold">
          <span className="text-gray-600">Daniel </span>
          <span className="text-orange-500">Mbedobe.</span>
        </h1>
        <h2 className="text-2xl italic text-gray-300">
          Your vision, my expertise – together, we create magic.
        </h2>
        <p className="text-sm leading-relaxed text-gray-400">
          Hi, I’m Daniel Mbedobe, a dedicated web developer and data entry
          specialist with 15+ years of experience. I build responsive,
          user-focused websites and efficiently handle complex data workflows.
          My approach blends clean code, attention to detail, and creativity to
          deliver seamless digital experiences. Whether you need a modern web
          solution or fast, accurate data handling — I’ve got you covered.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-4 text-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-500">19+</h3>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">301+</h3>
            <p className="text-sm text-gray-300">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">424+</h3>
            <p className="text-sm text-gray-300">Projects Done</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-500">11</h3>
            <p className="text-sm text-gray-300">Winning Awards</p>
          </div>
        </div>
      </div>

      {/* Right: Tabs */}
      <div className="w-full space-y-6 lg:w-1/2">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-semibold rounded ${
                activeTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-h-[400px] overflow-y-auto pr-2">
          {tabContent[activeTab]?.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-900 border-l-4 border-orange-500 rounded"
            >
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
