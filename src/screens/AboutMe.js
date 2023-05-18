import "../styles/aboutMe.scss";
import Spacer from "../common/Spacer";
import AboutSection from "../components/AboutSection";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="page-title">About Me</h2>
      <div className="container content">
        <p className="">Here's the short version:</p>

        <AboutSection
          iconVariant="education"
          text="I'm in my third year at Northeastern:"
          bullets={[
            { bullet: "Major: Computer Science", key: "major" },
            { bullet: "Minor: Business Administration", key: "minor" },
            { bullet: "Expected Graduation: May 2024", key: "grad" },
          ]}
        />

        <AboutSection
          iconVariant="work"
          text="My work experience includes:"
          bullets={[
            { bullet: "6 month Frontend Co-op at Flexcar", key: "flexcar" },
            {
              bullet:
                "6 month Software Development Co-op at PowerAdvocate (now WoodMackenzie)",
              key: "PA",
            },
            {
              bullet:
                "2 semesters as a Teaching Assistant for Object Oriented Deisgn and Logic and Computation classes",
              key: "TA",
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
    </div>
  );
}
