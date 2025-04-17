import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";

const tabs = ["Skill", "Experience", "Education", "Other", "Languages"];

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
      title: "CMS (WordPress)",
      description: "Building and managing content-heavy websites.",
    },
    {
      title: "Data Analysis",
      description:
        "Analyzing and visualizing data using Python libraries like Pandas, NumPy, and Seaborn. Skilled in drawing insights from complex datasets.",
    },
    {
      title: "Data Entry",
      description: "Accurate, fast entry and processing of large data sets.",
    },
  ],
  Experience: [
    {
      title: "Software Engineer",
      subtitle: "Freelance | 2019 - Present",
      description: `Built full-stack applications using MERN, PHP, and C#. Delivered POS and inventory systems, offered client consultations, and provided ongoing maintenance support.`,
    },
    {
      title: "Field Enumerator",
      subtitle: "Vision Fund | March 2021",
      description: `Conducted household interviews and accurately entered survey data using ODK tools.`,
    },
    {
      title: "Supervisor - Population and Housing Census",
      subtitle: "Ghana Statistical Service | June - July 2021",
      description: `Supervised census data collection, performed quality checks, and coordinated with local authorities for efficient field operations.`,
    },
    {
      title: "Data Entry Clerk",
      subtitle: "Electoral Commission Ghana | March - May 2012",
      description: `Entered and verified voter registration data in Excel. Ensured data accuracy and adherence to national electoral standards.`,
    },
    {
      title: "Field Enumerator",
      subtitle: "World Vision Ghana - Saboba AP | August 2018",
      description: `Carried out community-level interviews and input data using ODK for development project assessments.`,
    },
    {
      title: "Data Entry Clerk",
      subtitle: "World Vision Ghana - Saboba AP | May 2015 & Aug 2016",
      description: `Entered and processed evaluation survey data, collaborated with field teams, and ensured quality control through data validation procedures.`,
    },
  ],
  Education: [
    {
      title: "ALX | Certified Software Engineer",
      subtitle: "2022 - 2023",
      description:
        "Completed an intensive, hands-on software engineering program covering full-stack development, system design, and low-level programming.",
    },
    {
      title: "Udacity | Data Analyst Nanodegree",
      subtitle: "2022",
      description:
        "Focused on data wrangling, exploratory data analysis, statistics, and building data-driven projects using Python and SQL.",
    },
    {
      title: "Udacity | React Nanodegree",
      subtitle: "11/2021",
      description:
        "Gained in-depth skills in building performant React apps with state management, routing, and testing best practices.",
    },
    {
      title: "Coursera | Google Project Management Specialization",
      subtitle: "09/2021",
      description:
        "Learned the foundations of project planning, execution, Agile methodologies, and stakeholder management.",
    },
    {
      title: "Coursera | Google UX Design Specialization",
      subtitle: "07/2021",
      description:
        "Acquired knowledge in user-centered design, wireframing, prototyping, and usability testing.",
    },
    {
      title: "Coursera | Google IT Support Specialization",
      subtitle: "05/2021",
      description:
        "Covered computer networking, operating systems, system administration, and troubleshooting techniques.",
    },
  ],
  Languages: [
    {
      title: "Likpakpaanl",
      description: "Native",
    },
    {
      title: "English",
      description: "Fluent",
    },
    {
      title: "French",
      description: "Fluent",
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
  Other: [
    {
      title: "Attention to Detail",
      description:
        "Strong focus on accuracy in data entry and quality assurance tasks.",
    },
    {
      title: "Organizational Skills",
      description:
        "Able to manage multiple projects and deadlines efficiently with minimal supervision.",
    },
    {
      title: "Communication",
      description:
        "Clear, effective communicator with experience presenting technical ideas to non-technical audiences.",
    },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  const [activeTab, setActiveTab] = useState("Skill");

  return (
    <>
      <SEO
        title="About | Daniel Mbedobe Kunji"
        description="Learn more about Daniel Mbedobe Kunji, his journey in web development, data entry, and the tools and technologies he loves using."
        keywords="about Daniel Mbedobe Kunji, web developer, frontend, WordPress, MERN stack, React, developer story, skills, education"
      />
      <section
        id="about"
        className="flex flex-col items-center justify-between w-full max-w-screen-xl min-h-screen gap-10 px-6 py-12 mx-auto text-white lg:flex-row"
        aria-labelledby="about-heading"
      >
        {/* Left: Bio */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6 lg:w-1/2"
        >
          <header>
            <h2 id="about-heading" className="sr-only">
              About Daniel Mbedobe
            </h2>
            <h1 className="">
              <span className="text-gray-600">Daniel Mbedobe</span>
              <span className="text-orange-500"> Kunji.</span>
            </h1>
            <p className="italic ">
              Your vision, my expertise – together, we create magic.
            </p>
          </header>

          <p className="">
            Hi, I’m D. Mbedobe Kunji, a dedicated web developer and data entry
            specialist with 10+ years of experience. I specialize in building
            responsive web applications using React, JavaScript, and modern CSS
            frameworks like Tailwind, Bootstrap. I also offer fast, accurate
            data entry services for businesses and NGOs, ensuring seamless
            digital workflows. So, whether you need a modern web solution or
            fast, accurate data handling — I’ve got you covered.
          </p>

          {/* Stats Section */}
          <section aria-label="Professional statistics">
            <dl className="flex flex-wrap gap-8 pt-4 text-center">
              {[
                ["10+", "Years Experience"],
                ["10+", "Satisfied Clients"],
                ["13+", "Projects Done"],
              ].map(([num, label], i) => (
                <motion.div key={label} custom={i} variants={fadeInUp}>
                  <dt className="text-3xl font-bold text-orange-500">{num}</dt>
                  <dd className="text-sm text-gray-400">{label}</dd>
                </motion.div>
              ))}
            </dl>
          </section>
        </motion.div>

        {/* Right: Tabs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-6 lg:w-1/2"
        >
          {/* Tabs */}
          <nav aria-label="About section tabs">
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
                  aria-pressed={activeTab === tab}
                  aria-label={`Show ${tab}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-h-[400px] overflow-y-auto pr-2"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
          >
            {tabContent[activeTab]?.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="p-4 bg-gray-900 border-l-4 border-orange-500 rounded"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                {item.subtitle && (
                  <p className="text-xs italic text-gray-500">
                    {item.subtitle}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
