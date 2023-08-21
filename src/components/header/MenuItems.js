import OpenLinkButton from "../../common/OpenLinkButton";
import Spacer from "../../common/Spacer";
import useScreenBreakpoints from "../../hooks/useScreenBreakpoints";
import ForwardArrow from "../../icons/ForwardArrow";
import resume from "../../images/Resume.pdf";
import "./menuItems.scss";

const MenuItems = ({ onClick }) => {
  const breakpoint = useScreenBreakpoints();

  return (
    <div className="menu-items">
      {breakpoint === 0 && (
        <a href="/" className="item" onClick={onClick}>
          <span className="item-text">Home</span>
          <MenuItemArrow />
        </a>
      )}
      <a href="#about-me" className="item" onClick={onClick}>
        <span className="item-text">About</span>
        <MenuItemArrow />
      </a>
      <a href="#projects" className="item" onClick={onClick}>
        <span className="item-text">Projects</span>
        <MenuItemArrow />
      </a>
      <a href="#experience" className="item" onClick={onClick}>
        <span className="item-text">Experience</span>
        <MenuItemArrow />
      </a>
      {breakpoint === 1 && <OpenLinkButton text="View Resume" url={resume} />}
    </div>
  );
};

const MenuItemArrow = () => {
  const breakpoint = useScreenBreakpoints();

  if (breakpoint < 1) {
    return (
      <>
        <Spacer width="4px" height="0px" />
        <ForwardArrow />
      </>
    );
  }
  return null;
};

export default MenuItems;
