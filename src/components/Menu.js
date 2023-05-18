import MenuIcon from "../icons/MenuIcon";
import useScreenBreakpoints from "../hooks/useScreenBreakpoints";
import resume from "../images/Resume.pdf";

import "../styles/menu.scss";
import OpenLinkButton from "./OpenLinkButton";

const Menu = () => {
  const screenSize = useScreenBreakpoints();

  if (screenSize === 0) {
    return (
      <div className="menu">
        <MenuIcon />
      </div>
    );
  }

  return (
    <div className="menu">
      <a className="item">About</a>
      <a className="item">Projects</a>
      <a className="item">Experience</a>
      <OpenLinkButton text="View Resume" url={resume} />
    </div>
  );
};

export default Menu;
