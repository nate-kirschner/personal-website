const CloseIcon = ({ className, onClick }) => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Menu / Close_MD">
          <path
            id="Vector"
            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
            stroke="#1b2444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default CloseIcon;
