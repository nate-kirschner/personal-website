import "../styles/aboutMe.scss";
import Spacer from "../common/Spacer";
import AboutSection from "../components/AboutSection";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="page-title">About Me</h2>
      <div className="container">
        <p className="text">Here's the short version:</p>

        <Spacer height="8px" />
        <AboutSection
          iconVariant="education"
          text="I'm in my third year at Northeastern:"
          bullets={[
            { bullet: "Major: Computer Science" },
            { bullet: "Minor: Business Administration" },
            { bullet: "Expected Graduation: May 2024" },
          ]}
        />

        <AboutSection
          iconVariant="work"
          text="My work experience includes:"
          bullets={[
            { bullet: "6 month Frontend Co-op at Flexcar" },
            {
              bullet:
                "6 month Software Development Co-op at PowerAdvocate (now WoodMackenzie)",
            },
            {
              bullet:
                "2 semesters as a Teaching Assistant for Object Oriented Deisgn and Logic and Computation classes",
            },
          ]}
        />

        <AboutSection
          iconVariant="skiing"
          text="Some of my interests are:"
          bullets={[
            { bullet: "Skiing" },
            { bullet: "Pickup/Intramural basketball" },
            { bullet: "Watching heist movies" },
            { bullet: "Discovering new music" },
          ]}
        />
      </div>
    </div>
  );
}
