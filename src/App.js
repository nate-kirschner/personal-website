import "./App.css";
import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import Contact from "./screens/Contact";
import { useRef } from "react";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
