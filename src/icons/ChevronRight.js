const ChevronRight = ({ style, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="icon"
      fill="#718ce5"
      height="24px"
      width="24px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.949 511.949"
      xml-space="preserve"
      style={style}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="2px"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M386.235,248.308L140.902,2.975c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76 l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213 l245.333-245.333C390.395,259.188,390.395,252.468,386.235,248.308z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ChevronRight;
