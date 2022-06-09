import './App.css';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useRef, useEffect, useState } from 'react';
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

  const makeStars = () => {
    let minStars = 100;
    let numStars = Math.floor(Math.random() * 1 + minStars);
    console.log(numStars);
    let stars = [];
    for (let i = 0; i < numStars; i++) {
      let top = Math.floor(Math.random() * 100);
      let left = Math.floor(Math.random() * 100);
      let width = Math.floor(Math.random() * 5);
      let animationDuration = Math.floor(Math.random() * 2500) / 100 + 1;
      let style = {
        top: `${top}vh`,
        left: `${left}vw`,
        width: `${width}px`,
        height: `${width}px`,
        animation: `stars ${animationDuration}s ease-in-out infinite`,
      }
      stars[i] = <div className="star" id={`${i}`} style={style}/>
    }
    return stars;
  }

  const [starsState, setStarsState] = useState(null);

  useEffect(() => {
    setStarsState(makeStars());
  }, [])

  return (
    <div className="App">
      <div className="starsDiv">
        {
          // starsState
        }
      </div>
      <Home allRefs={pageRefs} scrollToPage={scrollToPage} />
      <AboutMe headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Projects headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Experience headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
      <Contact headerClicked={headerClicked} allRefs={pageRefs} scrollToPage={scrollToPage} />
    </div>
  );
}

export default App;
