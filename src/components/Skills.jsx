import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      className="py-20 mx-auto md:max-w-2xl  lg:max-w-4xl xl:max-w-6xl px-4 "
      id="skills"
    >
      <SectionTitle text="tech stack" />
      <div className="py-16 grid  place-items-center grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
