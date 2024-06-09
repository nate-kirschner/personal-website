import "./home.scss";
import Header from "../components/header/Header";
import Spacer from "../common/Spacer";
import ContactIcons from "../components/ContactIcons";
import useScreenBreakpoints from "../hooks/useScreenBreakpoints";

export default function Home() {
  const breakpoint = useScreenBreakpoints();

  return (
    <div className="homepage content">
      <Header />
      <div className="title">
        <h1 className="main">
          Hi, I'm
          <div className="name">
            <span>{"Nate "}</span>
            <span style={{ whiteSpace: "nowrap" }}>{"Kirschner"}</span>
          </div>
        </h1>
        <Spacer height="16px" />
        <h3 className="sub">Software Developer Based in Boston</h3>
        <Spacer height="16px" />
        {breakpoint === 0 && <ContactIcons variant="header" />}
      </div>
    </div>
  );
}
