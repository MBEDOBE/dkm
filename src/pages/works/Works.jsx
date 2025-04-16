import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";

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

export default function MyWorks() {
  return (
    <section className="flex flex-col items-center justify-between w-full max-w-screen-xl min-h-screen gap-10 py-12 mx-auto text-white lg:flex-row">
      {/* Left content */}
      <div className="w-full lg:w-[35%]">
        <h2 className="mb-4 text-5xl font-bold text-gray-400">
          See <span className="text-red-500">My Works</span>
        </h2>
        <p className="text-gray-300">
          Discover a collection of my most recent and notable projects. Each one
          reflects my commitment to quality, creativity, and achieving client
          goals.
        </p>
      </div>

      {/* Swiper section */}
      <div className="w-full lg:w-[60%]">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full mb-4 rounded-xl"
                />
                <div className="flex justify-between mb-6 border border-red-300 border-1">
                  <div className="">
                    <h4 className="text-lg font-semibold text-gray-600">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      {project.stack.join(", ")}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-400 hover:underline"
                    >
                      View live site
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 hover:animate-spin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
