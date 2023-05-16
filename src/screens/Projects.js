import "../styles/projects.scss";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="page-title">Projects</h2>
      <div className="cards">
        <ProjectCard
          title="Rate My Site"
          description="A website for sharing and getting feedback on personal websites."
        />
        <ProjectCard
          title="Best Ball Majors"
          description="A fantasy golf website with weekly competitions to compete against friends."
        />
        <ProjectCard
          title="PseudoNote"
          description="A note taking app for computer science students."
        />
        <ProjectCard
          title="The Other Half's News"
          description="A news aggregator which sorts articles by political bias."
        />
      </div>
    </div>
  );
}
