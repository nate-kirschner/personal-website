import AboutIcon from "./AboutIcon";

const AboutSection = ({ text, bullets, iconVariant }) => {
  return (
    <div className="section">
      <AboutIcon iconVariant={iconVariant} />
      <div className="text">
        <p>{text}</p>
        <ul>
          {bullets.map(({ bullet }) => {
            return (
              <li>
                <p>{bullet}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
