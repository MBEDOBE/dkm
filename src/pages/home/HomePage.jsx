import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between w-full max-w-screen-xl min-h-screen px-4 pb-10 mx-auto pt-28 lg:py-0 lg:flex-row">
      {/* Left Side Text */}
      <motion.div
        className="pb-4 space-y-8 text-center lg:pb-0 lg:w-1/2 lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Crafting Solutions With{" "}
          <span className="text-red-500">Creativity</span> &{" "}
          <span className="text-orange-500">Precision</span>
        </h2>

        <p className="pb-5 text-sm text-justify text-gray-800 md:text-base">
          I’m Daniel Mbedobe, a frontend developer from Ghana specializing in
          fast, accessible, and user-focused web experiences. I also offer
          high-quality data entry services. Whether you need a modern static or
          dynamic website or help organizing your data, I’m here to deliver with
          creativity and precision. Let’s build something impactful together.
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
          alt="Daniel Mbedobe"
          className="w-[60%] h-auto shadow-xl rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default HomePage;
