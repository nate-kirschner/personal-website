import { useState } from "react";
import { Drawer } from "@mui/material";
import ProjectImageCarousel from "./ProjectImageCarousel";
import OpenLinkButton from "../../common/OpenLinkButton";
import useScreenBreakpoints from "../../hooks/useScreenBreakpoints";
import "./projectDrawer.scss";
import Spacer from "../../common/Spacer";
import DrawerCloseButton from "../../common/DrawerCloseButton";
import DrawerOrModal from "../../common/DrawerOrModal";

const ProjectDrawer = ({ isOpen, onClose, images, bullets, url, title }) => {
  const [imageWidth, setImageWidth] = useState(200);

  const breakpoint = useScreenBreakpoints();

  const anchor = breakpoint === 0 ? "bottom" : "right";

  return (
    <DrawerOrModal anchor={anchor} open={isOpen} onClose={onClose}>
      <div className="project-drawer" style={{ width: `${imageWidth}px` }}>
        <div className="inner-container">
          <ProjectImageCarousel
            images={images}
            imageWidth={imageWidth}
            setImageWidth={setImageWidth}
          />

          <div className="drawer-content">
            <DrawerCloseButton text="Back To Projects" onClose={onClose} />

            {bullets.map(({ text, key }) => {
              return <p key={key}>{text}</p>;
            })}

            <Spacer height="24px" />
          </div>

          <div className="link-container">
            <OpenLinkButton
              text={title === "PseudoNote" ? "View Demo" : "View Site"}
              url={url}
            />
          </div>

          <Spacer height="40px" />
        </div>
      </div>
    </DrawerOrModal>
  );
};

export default ProjectDrawer;
