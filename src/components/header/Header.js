import { useState } from "react";
import useScreenBreakpoints from "../../hooks/useScreenBreakpoints";
import MenuIcon from "../../icons/MenuIcon";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import "./header.scss";
import ContactIcons from "../ContactIcons";

const Header = () => {
  const screenSize = useScreenBreakpoints();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      {screenSize === 0 && (
        <>
          <MenuIcon className="menu-icon" onClick={() => setIsOpen(true)} />
          <Menu
            onClose={() => setIsOpen(false)}
            className={isOpen ? "open" : "close"}
          />
        </>
      )}
      {screenSize > 0 && (
        <>
          <ContactIcons variant="header" />
          <MenuItems />
        </>
      )}
    </div>
  );
};

export default Header;
