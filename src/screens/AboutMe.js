import "../styles/aboutMe.scss";
import EducationIcon from "../icons/EducationIcon";
import WorkIcon from "../icons/WorkIcon";
import SkiingIcon from "../icons/SkiingIcon";
import Spacer from "../common/Spacer";

export default function AboutMe({ headerClicked, allRefs, scrollToPage }) {
  return (
    <div className="about-me" ref={allRefs["About Me"]}>
      <h2 className="page-title">About Me</h2>
      <div className="container">
        <p className="text">Here's the short version:</p>
        <Spacer width="100px" />

        <EducationIcon className="icon" />
        <p className="text">
          I'm in my third year at Northeastern:
          <ul>
            <li>Major: Computer Science</li>
            <li>Minor: Business Administration</li>
            <li>Expected Graduation: May 2024</li>
          </ul>
        </p>

        <WorkIcon className="icon" />
        <p className="text">
          My work experience includes:
          <ul>
            <li>
              6 month Software Development Co-op at PowerAdvocate (now
              WoodMackenzie).
            </li>
            <li>6 month Frontend Co-op at Flexcar.</li>
            <li>
              2 semesters as a Teaching Assistant for Object Oriented Deisgn and
              Logic and Computation classes
            </li>
          </ul>
        </p>

        <SkiingIcon className="icon" />
        <p className="text">
          Some of my interests are:
          <ul>
            <li>Skiing</li>
            <li>Pickup/Intramural basketball</li>
            <li>Watching heist movies</li>
            <li>Discovering new music</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
