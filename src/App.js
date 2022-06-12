import './App.css';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useRef } from 'react';

function App() {

  const pageRefs = {
    "Home": useRef(null),
    "About Me": useRef(null),
    "Projects": useRef(null),
    "Experience": useRef(null),
    "Contact": useRef(null)
  }

  const scrollToPage = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const headerClicked = (headerRef, blurOn) => {
    if (blurOn) {
      headerRef.current.style.position = "relative"
      headerRef.current.style.zIndex = "1000"
    } else {
      headerRef.current.style.position = ""
      headerRef.current.style.zIndex = "0"
    }
  }


  return (
    <div className="App">
      <div className="starsDiv">
      </div>
      <Home allRefs={pageRefs} scrollToPage={scrollToPage} />
      <AboutMe headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Projects headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Experience headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Contact headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <div className="iconsSource">
          <a href="https://icons8.com" target="_blank" rel="noreferrer">Icons by Icons8</a>
      </div>
    </div>
  );
}

export default App;
