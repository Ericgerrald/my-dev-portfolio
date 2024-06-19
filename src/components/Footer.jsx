import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-100 py-2 shadow-2xl">
      <div className="flex items-center justify-center gap-6">
        <p className="font-proza tracking-wider font-bold ">
          &copy; {year} Nwaru Victor Sunny{" "}
        </p>
        <a
          className="flex gap-1"
          href="https://www.linkedin.com/in/victor-sunny-093347209"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="h-6 w-6 " />
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
