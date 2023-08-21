import { useState } from "react";
import ChevronRight from "../../icons/ChevronRight";
import Spacer from "../../common/Spacer";
import "./projectCard.scss";
import ProjectDrawer from "./ProjectDrawer";

const ProjectCard = ({ title, description, techUsed, drawer }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className="project-card" onClick={() => setIsDrawerOpen(true)}>
        <div className="text-container">
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
          <div className="tech-list">
            {techUsed?.map((tech) => {
              return <div className="tech-item">{tech}</div>;
            })}
          </div>
          <Spacer height="16px" />
        </div>
        {drawer && <ChevronRight />}
      </div>

      {drawer && (
        <ProjectDrawer
          title={title}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          {...drawer}
        />
      )}
    </>
  );
};

export default ProjectCard;
