import Spacer from "../../common/Spacer";
import DrawerOrModal from "../../common/DrawerOrModal";
import useScreenBreakpoints from "../../hooks/useScreenBreakpoints";
import DrawerCloseButton from "../../common/DrawerCloseButton";
import "./experienceDrawer.scss";

const ExperienceDrawer = ({ isOpen, onClose, techUsed, bullets }) => {
  const breakpoint = useScreenBreakpoints();
  const anchor = breakpoint === 0 ? "bottom" : "right";

  return (
    <DrawerOrModal anchor={anchor} open={isOpen} onClose={onClose}>
      <div className="experience-drawer">
        <div className="drawer-content">
          <Spacer height="0px" />
          <DrawerCloseButton onClose={onClose} text="Back To Experience" />
          <Spacer height="16px" />
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
    </DrawerOrModal>
  );
};

export default ExperienceDrawer;
