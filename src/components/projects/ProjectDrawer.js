import { useState } from "react";
import { Drawer } from "@mui/material";
import ProjectImageCarousel from "./ProjectImageCarousel";
import OpenLinkButton from "../../common/OpenLinkButton";
import useScreenBreakpoints from "../../hooks/useScreenBreakpoints";
import "./projectDrawer.scss";
import Spacer from "../../common/Spacer";
import DrawerCloseButton from "../../common/DrawerCloseButton";

const ProjectDrawer = ({ isOpen, onClose, images, bullets, url }) => {
  const [imageWidth, setImageWidth] = useState(200);

  const breakpoint = useScreenBreakpoints();

  const anchor = breakpoint === 0 ? "bottom" : "right";

  return (
    <>
      <Drawer anchor={anchor} open={isOpen} onClose={onClose}>
        <div className="project-drawer" style={{ width: `${imageWidth}px` }}>
          <div className="inner-container">
            <ProjectImageCarousel
              images={images}
              imageWidth={imageWidth}
              setImageWidth={setImageWidth}
            />

            <div className="drawer-content">
              <OpenLinkButton text="View Site" url={url} />

              {bullets.map(({ text, key }) => {
                return <p key={key}>{text}</p>;
              })}

              <Spacer height="24px" />
            </div>
          </div>

          <DrawerCloseButton onClose={onClose} />
        </div>
      </Drawer>
    </>
  );
};

export default ProjectDrawer;
