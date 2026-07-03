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
          iconVariant="work"
          text="My work experience includes:"
          bullets={[
            {
              bullet:
                "Currently working at Air Space Intelligence as a fullstack software developer since August 2024.",
              key: "ASI",
            },
            { bullet: "6 month Frontend Co-op at Flexcar.", key: "flexcar" },
            {
              bullet:
                "6 month Full-Stack Software Development Co-op at WoodMackenzie.",
              key: "PA",
            },
          ]}
        />

        <AboutSection
          iconVariant="education"
          text="Graduated from Northeastern in May 2024:"
          bullets={[
            { bullet: "Major: Computer Science", key: "major" },
            { bullet: "Minor: Business Administration", key: "minor" },
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
