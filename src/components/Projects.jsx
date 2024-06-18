// import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import { useFetchProjects } from "../fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section>
        <h2 className="text-center font-mono tracking-wide">Loading...</h2>
      </section>
    );
  }
  return (
    <section
      className="py-20 mx-auto md:max-w-2xl  lg:max-w-4xl xl:max-w-6xl px-4"
      id="projects"
    >
      <SectionTitle text={"Projects"} />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
