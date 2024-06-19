import victor from "../assets/victor.jpg";
const Hero = () => {
  return (
    <div id="home" className="bg-slate-100 py-24 ">
      <div className=" mx-auto px-8 flex flex-col-reverse items-center gap-9 lg:flex  lg:flex-row lg:items-center   lg:justify-between lg:mx-auto lg:max-w-6xl lg:gap-16 ">
        <article className="text-center">
          <h1 className=" font-comrmorant text-2xl text-slate-700 tracking-wider font-bold lg:text-3xl ">
            Hello!
          </h1>
          <h1 className=" font-comrmorant text-4xl  font-bold tracking-wide text-slate-700 lg:text-5xl  ">
            I’m Victor Sunny
          </h1>
          <p className=" font-proza text-base tracking-wide text-slate-600 mt-2 mb-3.5 md:max-w-2xl md:mb-6 lg:max-w-4xl lg:text-xl lg:text-slate-400 lg:tracking-wide lg:leading-10 lg:mt-7 lg:mb-7 ">
            A junior web developer with a keen eye for detail and commitment to
            creating user-friendly and responsive websites. Eager to grow and
            enhance my skills.
          </p>
          <a
            className="bg-slate-700 text-slate-200 p-2 pl-4 pr-4 text-lg font-bold rounded-3xl tracking-wider lg:first-letter:hover:bg-slate-300 hover:text-slate-900 cursor-pointer "
            href="mailto:nwaru_victor@yahoo.com"
          >
            Get In Touch
          </a>
        </article>
        <article className="">
          <div className=" h-32 w-32 lg:h-36 lg:w-36">
            <img
              className=" w-full block object-cover rounded-full border-2 border-slate-700 p-1 lg:rounded-none "
              src={victor}
              alt="victor"
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
