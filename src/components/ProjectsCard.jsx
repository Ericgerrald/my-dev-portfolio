import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({ url, img, github, title }) => {
  return (
    <article className="bg-slate-700 rounded-lg shadow-md hover:shadow-lg duration-300">
      <img
        className="w-full object-cover rounded-t-lg h-48"
        src={img}
        alt={title}
      />
      <div className="capitalize p-8 font-comrmorant ">
        <h2 className="text-xl tracking-wide font-medium text-white ">
          {title}
        </h2>
        <div className="mt-4 flex gap-x-10 items-center justify-center  ">
          <a href={url} target="_blank" rel="noreferrer">
            <TbWorldWww className="h-8 w-8 text-white " />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 cursor-pointer text-white " />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
