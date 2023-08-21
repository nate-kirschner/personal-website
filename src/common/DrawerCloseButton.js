import BackArrow from "../icons/BackArrow";
import Spacer from "./Spacer";
import "./drawerCloseButton.scss";

const DrawerCloseButton = ({ onClose, text }) => {
  return (
    <div className="close-container">
      <button className="close" onClick={onClose}>
        <BackArrow />
        <Spacer width="4px" height="0" />
        <span className="close-text">{text}</span>
      </button>
    </div>
  );
};

export default DrawerCloseButton;
