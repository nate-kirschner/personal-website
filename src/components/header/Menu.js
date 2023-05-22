import "./menu.scss";
import CloseIcon from "../../icons/CloseIcon";
import MenuItems from "./MenuItems";
import Footer from "../Footer";

const Menu = ({ className, onClose }) => {
  return (
    <div className={`menu ${className}`}>
      <div className="top-container">
        <CloseIcon className="close" onClick={onClose} />
      </div>
      <MenuItems onClick={onClose} />
      <Footer />
    </div>
  );
};

export default Menu;
