import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full px-4 border-t-2 ">
      <div className="flex items-center justify-center mt-4">
        <Link
          className="logo  whitespace-nowrap text-lg md:text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          to="/"
        >
          Dinalipi
        </Link>
      </div>
      <section className="max-w-6xl mx-auto flex flex-col sm:flex-row  items-center justify-between gap-4 py-4">
        <div className="w-full  flex   flex-col  items-center  justify-between gap-4 sm:flex-row ">
          <div>
            <p className="text-center text-slate-700 dark:text-white  text-sm ">
              {" "}
              Copyright © {year} all reserved
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/faisalahmed23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6 text-[#0A66C2] dark:text-white" />
            </a>
            <a
              href="https://x.com/faisalahmed_23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/23-faisal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6 text-[#5C6BC0] dark:text-white" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
