import "../styles/projectCard.scss";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

export default ProjectCard;
