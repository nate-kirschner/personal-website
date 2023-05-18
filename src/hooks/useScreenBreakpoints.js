import useWindowDimensions from "./useWindowDimensions";

const useScreenBreakpoints = () => {
  const { width } = useWindowDimensions();

  if (width < 768) {
    return 0;
  } else if (width < 1440) {
    return 1;
  } else {
    return 2;
  }
};

export default useScreenBreakpoints;
