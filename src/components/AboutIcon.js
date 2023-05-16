import EducationIcon from "../icons/EducationIcon";
import WorkIcon from "../icons/WorkIcon";
import SkiingIcon from "../icons/SkiingIcon";

const AboutIcon = ({ iconVariant }) => {
  switch (iconVariant) {
    case "education":
      return <EducationIcon className="icon" />;
    case "work":
      return <WorkIcon className="icon" />;
    case "skiing":
      return <SkiingIcon className="icon" />;
  }
};

export default AboutIcon;
