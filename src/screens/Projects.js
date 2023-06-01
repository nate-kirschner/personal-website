import "./projects.scss";
import ProjectCard from "../components/projects/ProjectCard";
import Spacer from "../common/Spacer";
import projects from "../constants/projects";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="page-title">Projects</h2>
      <div className="cards">
        {projects.map(({ title, description, techUsed, drawer }) => {
          return (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              techUsed={techUsed}
              drawer={drawer}
            />
          );
        })}
      </div>
      <Spacer height="64px" />
    </div>
  );
}
