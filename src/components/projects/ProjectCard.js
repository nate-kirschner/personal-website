import { useState } from "react";
import ChevronRight from "../../icons/ChevronRight";

import "./projectCard.scss";
import ProjectDrawer from "./ProjectDrawer";

const ProjectCard = ({ title, description, drawer }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div className="project-card" onClick={() => setIsDrawerOpen(true)}>
        <div className="text-container">
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </div>
        <ChevronRight />
      </div>

      <ProjectDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        {...drawer}
      />
    </>
  );
};

export default ProjectCard;
