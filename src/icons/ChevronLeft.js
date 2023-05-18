import ChevronRight from "./ChevronRight";

const ChevronLeft = ({ onClick }) => {
  return (
    <ChevronRight style={{ transform: "rotateY(180deg)" }} onClick={onClick} />
  );
};

export default ChevronLeft;
