const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2 mt-2 text-gray-700 bg-gray-100 border-t border-gray-200">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-4 mx-auto text-sm md:flex-row">
        <p>© {year} MnJ. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="/about" className="transition hover:text-orange-500">
            About
          </a>
          <a href="/projects" className="transition hover:text-orange-500">
            Projects
          </a>
          <a href="/contact" className="transition hover:text-orange-500">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
