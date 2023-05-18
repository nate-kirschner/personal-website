const OpenLinkButton = ({ text, url }) => {
  const handleResumeClick = () =>
    window.open(url, "_blank", "noopener,noreferrer");
  return (
    <button className="open-link-button" onClick={handleResumeClick}>
      {text}
    </button>
  );
};

export default OpenLinkButton;
