import ChevronRight from "./ChevronRight";

const ChevronDown = ({ onClick }) => {
  return (
    <ChevronRight style={{ transform: "rotateY(90deg)" }} onClick={onClick} />
  );
};

export default ChevronDown;
