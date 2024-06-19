const SkillCard = ({ icon, title }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold text-slate-500 font-proza ">{title}</h4>
    </article>
  );
};

export default SkillCard;
