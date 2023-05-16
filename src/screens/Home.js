import "../styles/home.scss";
import resume from "../images/Resume.pdf";

export default function Home() {
  const handleResumeClick = () =>
    window.open(resume, "_blank", "noopener,noreferrer");
  return (
    <div className="homepage">
      <div className="title">
        <h1 className="main">
          Hi, I'm <div>Nate Kirschner</div>
        </h1>
        <h3 className="sub">
          A Computer Science Student and Software Developer.
        </h3>
      </div>

      <button className="resumeButton" onClick={handleResumeClick}>
        Resume
      </button>
    </div>
  );
}
