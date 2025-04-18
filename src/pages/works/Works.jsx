import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import SEO from "../../components/seo/SEO";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "/assets/sabtech-macair.png",
    name: "Crypto Dashboard",
    stack: ["React", "Tailwind", "Node.js"],
    description: "Secure platform for crypto transactions.",
    link: "https://example.com",
  },
  {
    id: 2,
    image: "/images/project2.png",
    name: "NFT Marketplace",
    stack: ["Next.js", "Solidity"],
    description: "Buy and mint NFTs easily.",
    link: "https://example.com",
  },
  {
    id: 3,
    image: "/images/project3.png",
    name: "Real Estate Site",
    stack: ["Vue", "Firebase"],
    description: "Modern platform for home listings.",
    link: "https://example.com",
  },
  {
    id: 4,
    image: "/images/project4.png",
    name: "Portfolio Website",
    stack: ["React", "SCSS"],
    description: "Personal branding and work showcase.",
    link: "https://example.com",
  },
  {
    id: 5,
    image: "/images/project5.png",
    name: "eCommerce UI",
    stack: ["React", "Redux"],
    description: "Elegant shopping UI for modern stores.",
    link: "https://example.com",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MyWorks() {
  return (
    <>
      <SEO
        title="Portfolio | Daniel Mbedobe Kunji"
        description="Browse through Daniel Mbedobe Kunji’s portfolio to see his recent projects built with React, Tailwind, WordPress, and more."
        keywords="portfolio, Daniel Mbedobe Kunji, projects, React, WordPress, Tailwind, frontend work, MERN apps, Ghana developer, web development"
      />

      <motion.section
        className="flex flex-col items-center justify-between w-full max-w-screen-xl min-h-screen gap-10 py-12 mx-auto text-white lg:flex-row"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Left content */}
        <div className="w-full lg:w-[35%] space-y-4">
          <motion.div
            className="h2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1>
              See <span className="text-orange-500">My Works</span>
            </h1>
          </motion.div>

          <motion.p
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover a collection of my most recent and notable projects. Each
            one reflects my commitment to quality, creativity, and achieving
            client goals.
          </motion.p>
        </div>

        {/* Swiper section */}
        <motion.div
          className="w-full lg:w-[60%]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full mb-4 rounded-xl"
                  />
                  <div className="flex justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-600">
                        {project.name}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      className="flex flex-col items-start gap-3"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {/* Pills for tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium text-orange-400 border border-orange-500 rounded-full bg-orange-900/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Animated link */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-red-400"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        View live site
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.section>
    </>
  );
}
