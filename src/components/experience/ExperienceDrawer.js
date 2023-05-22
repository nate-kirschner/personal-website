import Spacer from "../../common/Spacer";
import { Drawer } from "@mui/material";
import useScreenBreakpoints from "../../hooks/useScreenBreakpoints";
import "./experienceDrawer.scss";

const ExperienceDrawer = ({ isOpen, onClose, techUsed, bullets }) => {
  const breakpoint = useScreenBreakpoints();
  const anchor = breakpoint === 0 ? "bottom" : "right";

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={onClose}>
      <div className="experience-drawer">
        <div className="drawer-content">
          <p>Technologies that I used:</p>
          <div className="tech-list">
            {techUsed?.map((tech) => {
              return <div className="tech-item">{tech}</div>;
            })}
          </div>
          <Spacer height="24px" />
          <p>What I worked on:</p>
          <ul className="list">
            {bullets.map(({ text, key }) => {
              return (
                <li key={key}>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default ExperienceDrawer;
