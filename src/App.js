import "./App.css";
import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import Contact from "./screens/Contact";
import { useRef } from "react";
import Menu from "./components/Menu";

function App() {
  const pageRefs = {
    Home: useRef(null),
    "About Me": useRef(null),
    Projects: useRef(null),
    Experience: useRef(null),
    Contact: useRef(null),
  };

  const scrollToPage = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const headerClicked = (headerRef, blurOn) => {
    if (blurOn) {
      headerRef.current.style.position = "relative";
      headerRef.current.style.zIndex = "1000";
    } else {
      headerRef.current.style.position = "";
      headerRef.current.style.zIndex = "0";
    }
  };

  return (
    <div className="App">
      <Menu />
      <Home allRefs={pageRefs} scrollToPage={scrollToPage} />
      <AboutMe
        headerClicked={headerClicked}
        allRefs={pageRefs}
        scrollToPage={scrollToPage}
      />
      <Projects
        headerClicked={headerClicked}
        allRefs={pageRefs}
        scrollToPage={scrollToPage}
      />
      <Experience
        headerClicked={headerClicked}
        allRefs={pageRefs}
        scrollToPage={scrollToPage}
      />
      <Contact
        headerClicked={headerClicked}
        allRefs={pageRefs}
        scrollToPage={scrollToPage}
      />
      <div className="iconsSource">
        <a href="https://icons8.com" target="_blank" rel="noreferrer">
          Icons by Icons8
        </a>
      </div>
    </div>
  );
}

export default App;
