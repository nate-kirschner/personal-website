import "../styles/home.scss";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="homepage content">
      <Menu />
      <div className="title">
        <h1 className="main">
          Hi, I'm <div>Nate Kirschner</div>
        </h1>
        <h3 className="sub">
          A Computer Science Student and Software Developer.
        </h3>
      </div>
    </div>
  );
}
