const HomePage = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between w-full max-w-screen-xl min-h-screen px-4 pt-24 pb-10 mx-auto lg:py-0 lg:flex-row">
      <div className="pb-4 space-y-8 text-center lg:pb-0 lg:w-1/2 lg:text-left">
        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Crafting Solutions With{" "}
          <span className="text-red-500">Creativity</span> &{" "}
          <span className="text-orange-500">Precision</span>
        </h2>
        <p className="text-sm text-gray-800 md:text-base">
          Welcome to my portfolio! I’m Edwin Coward, a passionate designer
          dedicated to delivering innovative and impactful solutions. Explore my
          work, and let’s create something extraordinary together.
        </p>
        <button className="px-6 py-3 text-white transition bg-red-500 rounded mb-7 lg:mb-0 hover:bg-red-600">
          View All Works →
        </button>
      </div>
      <div className="flex justify-center mb-8 md:w-1/2 md:mb-0">
        <img
          src="/assets/pp.webp"
          alt="Edwin Coward"
          className="w-[60%] h-auto shadow-xl"
        />
      </div>
    </section>
  );
};

export default HomePage;
