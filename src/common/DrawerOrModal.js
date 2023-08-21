import { Drawer, Modal } from "@mui/material";
import useScreenBreakpoints from "../hooks/useScreenBreakpoints";

const DrawerOrModal = ({ anchor, open, onClose, children }) => {
  const breakpoint = useScreenBreakpoints();
  if (breakpoint === 0) {
    return (
      <Drawer anchor={anchor} open={open} onClose={onClose}>
        {children}
      </Drawer>
    );
  } else {
    return (
      <Modal open={open} onClose={onClose}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {children}
        </div>
      </Modal>
    );
  }
};

export default DrawerOrModal;
