import Spacer from "./Spacer";
import "./drawerCloseButton.scss";

const DrawerCloseButton = ({ onClose }) => {
  return (
    <div className="close-container">
      <Spacer height="16px" />
      <button className="close" onClick={onClose}>
        Close
      </button>
      <Spacer height="40px" />
    </div>
  );
};

export default DrawerCloseButton;
