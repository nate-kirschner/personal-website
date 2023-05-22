import { useEffect, useRef, useState } from "react";
import "./projectImageCarousel.scss";
import ChevronLeft from "../../icons/ChevronLeft";
import ChevronRight from "../../icons/ChevronRight";
import CarouselDots from "./CarouselDots";

const ProjectImageCarousel = ({ images, imageWidth, setImageWidth }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const numberOfImages = images.length;

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    setSelectedImageIndex(
      (index) => (index - 1 + numberOfImages) % numberOfImages
    );
  };

  const scrollRight = () => {
    setSelectedImageIndex((index) => (index + 1) % numberOfImages);
  };

  useEffect(() => {
    carouselRef.current.scrollLeft = selectedImageIndex * imageWidth;
  }, [selectedImageIndex, imageWidth]);

  return (
    <div className="image-carousel">
      <div className="images-container" ref={carouselRef}>
        {images.map((url) => {
          const image = require(`../../assets/${url}`);
          return (
            <img
              key={image}
              src={image}
              className="image"
              onLoad={(e) => setImageWidth(Math.ceil(e.target.width))}
              alt="Project Website"
            />
          );
        })}
      </div>
      <div className="controls">
        <ChevronLeft onClick={scrollLeft} />
        <CarouselDots
          selectedIndex={selectedImageIndex}
          numberOfDots={images.length}
        />
        <ChevronRight onClick={scrollRight} />
      </div>
    </div>
  );
};

export default ProjectImageCarousel;
