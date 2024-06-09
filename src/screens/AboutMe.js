import AboutSection from "../components/AboutSection";
import Spacer from "../common/Spacer";
import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <h2 className="page-title">About Me</h2>
      <div className="container content">
        <p className="">Here's the short version:</p>

        <AboutSection
          iconVariant="education"
          text="I just graduated from Northeastern in May 2024:"
          bullets={[
            { bullet: "Major: Computer Science", key: "major" },
            { bullet: "Minor: Business Administration", key: "minor" },
          ]}
        />

        <AboutSection
          iconVariant="work"
          text="My work experience includes:"
          bullets={[
            { bullet: "6 month Frontend Co-op at Flexcar.", key: "flexcar" },
            {
              bullet:
                "6 month Full-Stack Software Development Co-op at WoodMackenzie.",
              key: "PA",
            },
            {
              bullet:
                "2 semesters as a Teaching Assistant for Object Oriented Deisgn and Logic and Computation classes.",
              key: "TA",
            },
            {
              bullet:
                "2 years in Code 4 Community Club at Northeastern. 1 year as the tech lead for my team and 1 year as a developer.",
              key: "C4C",
            },
          ]}
        />

        <AboutSection
          iconVariant="skiing"
          text="Some of my interests are:"
          bullets={[
            { bullet: "Skiing", key: "ski" },
            { bullet: "Pickup/Intramural basketball", key: "bball" },
            { bullet: "Watching heist movies", key: "movie" },
            { bullet: "Discovering new music", key: "music" },
          ]}
        />
      </div>
      <Spacer height="64px" />
    </div>
  );
}
