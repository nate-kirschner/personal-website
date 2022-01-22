import './App.css';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useRef, useEffect } from 'react';
import { polyfill } from "seamless-scroll-polyfill";

function App() {

  const pageRefs = {
    "Home": useRef(null),
    "About Me": useRef(null),
    "Projects": useRef(null),
    "Experience": useRef(null),
    "Contact": useRef(null)
  }

  useEffect(() => {
    polyfill();
  }, [])

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
      <Home allRefs={pageRefs} scrollToPage={scrollToPage} />
      <AboutMe headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Projects headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Experience headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Contact headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
    </div>
  );
}

export default App;
