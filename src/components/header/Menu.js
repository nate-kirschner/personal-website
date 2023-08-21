import "./menu.scss";
import CloseIcon from "../../icons/CloseIcon";
import MenuItems from "./MenuItems";
import resume from "../../images/Resume.pdf";
import OpenLinkButton from "../../common/OpenLinkButton";
import Spacer from "../../common/Spacer";

const Menu = ({ className, onClose }) => {
  return (
    <div className={`menu ${className}`}>
      <div className="top-container">
        <CloseIcon className="close" onClick={onClose} />
      </div>
      <Spacer height="24px" />
      <MenuItems onClick={onClose} />
      <OpenLinkButton text="View My Resume" url={resume} />
    </div>
  );
};

export default Menu;
