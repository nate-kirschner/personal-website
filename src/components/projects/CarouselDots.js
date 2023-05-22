import "./carouselDots.scss";

const CarouselDots = ({ selectedIndex, numberOfDots }) => {
  return (
    <div className="carousel-dots">
      {[...Array(numberOfDots)].map((_, index) => {
        const selectedClass = selectedIndex === index ? "selected" : "";
        return <div className={`dot ${selectedClass}`} key={index} />;
      })}
    </div>
  );
};

export default CarouselDots;
