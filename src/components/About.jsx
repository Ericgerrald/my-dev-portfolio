import SectionTitle from "./SectionTitle";
import Cv from "../assets/Nwaru Victor Tech CV.pdf";

const About = () => {
  return (
    <section className="bg-slate-100 py-20 " id="about">
      <div className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <article>
          <SectionTitle text={"About Me"} />
          <p className="mt-10 text-base text-center tracking-wide md:text-start font-proza ">
            Hi, I’m Victor Sunny, a junior web developer with a unique
            background in architecture. I hold a Bachelor’s and a Master’s
            degree from the Department of Architecture at Imo State University.
            My journey into web development began with YouTube tutorials and was
            furthered through courses on Udemy, where I developed skills in
            HTML, CSS, JavaScript, and React. My architectural training gives me
            a keen eye for design, which I apply to creating dynamic and
            responsive websites. Additionally, I have experience with Node.js,
            Express, and MongoDB, and I am continually expanding my knowledge of
            new technologies.
          </p>
          <div className="hidden mt-4 md:inline">
            <p className="  mt-4 text-base text-center tracking-wide md:text-start font-proza">
              My work philosophy centers around writing clean, maintainable code
              and ensuring user-friendly, accessible web designs. When I’m not
              coding, I enjoy exploring architectural marvels, sketching
              designs, and photography, which keep my creativity thriving. Feel
              free to explore my portfolio to see more of my work, and don’t
              hesitate to contact me if you’d like to collaborate or simply say
              hi!
            </p>
          </div>
          <div className="text-center mt-6">
            <a
              className="bg-slate-700 text-slate-200 p-2 pl-4 pr-4 text-lg font-bold rounded-3xl tracking-wider lg:hover:bg-slate-300 hover:text-slate-900 cursor-pointer "
              href={Cv}
              download={"Victor_Sunny_Cv.pdf"}
            >
              Download Cv
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
