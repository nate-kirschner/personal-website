import "./experience.scss";
import ExperienceCard from "../components/experience/ExperienceCard";
import Spacer from "../common/Spacer";
import experience from "../constants/experience";

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <h2 className="page-title">Experience</h2>
      <Spacer height="24px" />
      <div className="cards">
        {experience.map((exp) => {
          return (
            <>
              <ExperienceCard {...exp} key={exp.company} />
              <Spacer height="64px" />
            </>
          );
        })}
      </div>
    </div>
  );
}
