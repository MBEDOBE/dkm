import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home | Daniel Mbedobe Kunji"
        description="Daniel Mbedobe is a skilled frontend developer and data entry and extraction expert with experience in React, Tailwind CSS, and WordPress. Explore his work and skills."
        keywords="Daniel Mbedobe Kunji, frontend developer, MERN stack, Tailwind CSS, Bootstrap, React developer, data entry, data scraping, WordPress, Ghana, portfolio"
      />

      <main className="flex flex-col-reverse items-center justify-between w-full max-w-screen-xl min-h-screen px-4 pb-10 mx-auto pt-28 lg:-pt-28 lg:py-0 lg:flex-row">
        {/* Left Side Text */}
        <motion.div
          className="pb-4 space-y-8 text-center lg:pb-0 lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hi, I’m Daniel Mbedobe – Crafting Solutions With{" "}
            <span className="text-red-500">Creativity</span> &{" "}
            <span className="text-orange-500">Precision</span>
          </h1>

          <p className="pb-5 text-sm text-justify text-gray-800 md:text-base">
            I&apos;m Daniel Mbedobe, a frontend developer from Ghana
            specializing in fast, accessible, and user-focused web experiences.
            I also offer high-quality data entry and extraction services.
            Whether you need a modern static or dynamic website or help
            organizing your data, I&apos;m here to deliver with creativity and
            precision. Let&apos;s build something impactful together.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/portfolio"
              className="px-6 py-3 text-white transition bg-red-500 rounded mb-7 lg:mb-0 hover:bg-red-600"
            >
              View All Works →
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex justify-center mb-8 md:w-1/2 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/assets/pp.webp"
            alt="Portrait of Daniel Mbedobe"
            className="w-[60%] h-auto shadow-xl rounded-xl"
            loading="lazy"
          />
        </motion.div>
      </main>
    </>
  );
};

export default HomePage;
