import { useState } from "react";
import { Drawer } from "@mui/material";
import ProjectImageCarousel from "./ProjectImageCarousel";
import OpenLinkButton from "./OpenLinkButton";
import useScreenBreakpoints from "../hooks/useScreenBreakpoints";
import "./projectDrawer.scss";

const ProjectDrawer = ({ isOpen, onClose, images, bullets, url }) => {
  const [imageWidth, setImageWidth] = useState(200);

  const breakpoint = useScreenBreakpoints();

  const anchor = breakpoint === 0 ? "bottom" : "right";

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={onClose}>
      <div className="project-drawer" style={{ width: `${imageWidth}px` }}>
        <ProjectImageCarousel
          images={images}
          imageWidth={imageWidth}
          setImageWidth={setImageWidth}
        />

        <div className="drawer-content">
          {bullets.map(({ text, key }) => {
            return <p key={key}>{text}</p>;
          })}

          <OpenLinkButton text="View Site" url={url} />
        </div>
      </div>
    </Drawer>
  );
};

export default ProjectDrawer;
