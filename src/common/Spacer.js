const Spacer = ({ width = "100%", height = "100%" }) => {
  return (
    <div
      style={{
        paddingLeft: width,
        paddingBottom: height,
      }}
    />
  );
};

export default Spacer;
