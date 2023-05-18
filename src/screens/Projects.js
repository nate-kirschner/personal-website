import "../styles/projects.scss";
import ProjectCard from "../components/ProjectCard";
import Spacer from "../common/Spacer";
import projects from "../constants/projects";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="page-title">Projects</h2>
      <div className="cards">
        {projects.map(({ title, description, drawer }) => {
          return (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              drawer={drawer}
            />
          );
        })}
      </div>
      <Spacer height="40px" />
    </div>
  );
}
