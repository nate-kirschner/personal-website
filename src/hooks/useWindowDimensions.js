import { useState, useEffect, useCallback } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowDimensions({ width, height });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return windowDimensions;
};

export default useWindowDimensions;
