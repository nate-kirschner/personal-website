import "../styles/experience.scss";
import ExperienceCard from "../components/ExperienceCard";
import Spacer from "../common/Spacer";

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="page-title">Experience</h2>
      <div className="cards">
        <ExperienceCard
          company="Flexcar"
          positions={[
            {
              key: "flexcar",
              title: "Frontend Development Co-op",
              date: "Jan. 2023 - June 2023",
            },
          ]}
        />
        <ExperienceCard
          company="PowerAdvocate (now WoodMackenzie)"
          positions={[
            {
              key: "PA",
              title: "Software Development Co-op",
              date: "Jan. 2022 - June 2022",
            },
          ]}
        />
        <ExperienceCard
          company="Code 4 Community Club"
          positions={[
            { title: "Tech Lead", date: "Sept. 2023 - Present", key: "lead" },
            {
              title: "Developer",
              date: "Sept. 2022 - Aug. 2023",
              key: "developer",
            },
          ]}
        />
        <ExperienceCard
          company="Northeastern University"
          positions={[
            {
              title: "Teaching Assistant - Object Oriented Design",
              date: "Sept. 2021 - Dec. 2021",
              key: "OOD",
            },
            {
              title: "Teaching Assistant - Logic and Computation",
              date: "Sept. 2022 - Dec. 2022",
              key: "Logic",
            },
          ]}
        />
      </div>
      <Spacer height="40px" />
    </div>
  );
}
