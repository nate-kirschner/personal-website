import OpenLinkButton from "../OpenLinkButton";
import resume from "../../images/Resume.pdf";
import "./menuItems.scss";

const MenuItems = ({ onClick }) => {
  return (
    <div className="menu-items">
      <a href="#about-me" className="item" onClick={onClick}>
        About
      </a>
      <a href="#projects" className="item" onClick={onClick}>
        Projects
      </a>
      <a href="#experience" className="item" onClick={onClick}>
        Experience
      </a>
      <OpenLinkButton text="View Resume" url={resume} />
    </div>
  );
};

export default MenuItems;
