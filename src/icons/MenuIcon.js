const MenuIcon = ({ className, onClick }) => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#1b2444"
      className={className}
      onClick={onClick}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Menu">
            <rect
              id="Rectangle"
              fillRule="nonzero"
              x="0"
              y="0"
              width="24"
              height="24"
            ></rect>
            <line
              x1="5"
              y1="7"
              x2="19"
              y2="7"
              id="Path"
              stroke="#1b2444"
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
            <line
              x1="5"
              y1="17"
              x2="19"
              y2="17"
              id="Path"
              stroke="#1b2444"
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              id="Path"
              stroke="#1b2444"
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MenuIcon;
