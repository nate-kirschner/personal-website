import "./App.css";
import Home from "./screens/Home";
import AboutMe from "./screens/AboutMe";
import Projects from "./screens/Projects";
import Experience from "./screens/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
