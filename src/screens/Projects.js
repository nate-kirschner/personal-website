import "../styles/projects.scss";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import Header from "../components/Header";

import cssIcon from "../images/skillsIcons/cssIcon.png";
import htmlIcon from "../images/skillsIcons/htmlIcon.png";
import javaIcon from "../images/skillsIcons/javaIcon.png";
import mysqlIcon from "../images/skillsIcons/mysqlIcon.png";
import nodeIcon from "../images/skillsIcons/nodeIcon.png";
import reactIcon from "../images/skillsIcons/reactIcon.png";
import awsIcon from "../images/skillsIcons/awsIcon.png";

export default function Projects({ headerClicked, allRefs, scrollToPage }) {
  const [selectedProject, setSelectedProject] = useState("");

  const showSideBar = (cardName) => {
    if (selectedProject === cardName) {
      setSelectedProject("");
    } else {
      setSelectedProject(cardName);
    }
  };

  return (
    <div className="projects" ref={allRefs["Projects"]}>
      <Header
        title="Projects"
        clicked={(blurOn) => headerClicked(allRefs["Projects"], blurOn)}
        allRefs={allRefs}
        scrollToPage={scrollToPage}
      />
      {cards(showSideBar, selectedProject)}
      <div className="bottomMargin" />
    </div>
  );
}

const cards = (cardClickedFunction, selected) => {
  return (
    <div className="cards">
      <ProjectCard
        title="Rate My Site"
        description={
          <p className="cardDescription">
            A website for sharing and getting feedback on personal websites.
          </p>
        }
        cardClickedFunction={cardClickedFunction}
        selected={selected}
        icons={[htmlIcon, nodeIcon, awsIcon, reactIcon, mysqlIcon]}
      />
      <ProjectCard
        title="Best Ball Majors"
        description={
          <p className="cardDescription">
            A fantasy golf website with weekly competitions to compete against
            friends.
          </p>
        }
        cardClickedFunction={cardClickedFunction}
        selected={selected}
        icons={[htmlIcon, nodeIcon, reactIcon, mysqlIcon, cssIcon]}
      />
      <ProjectCard
        title="PseudoNote"
        description={
          <p className="cardDescription">
            A note taking app for computer science students.
          </p>
        }
        cardClickedFunction={cardClickedFunction}
        selected={selected}
        icons={[htmlIcon, reactIcon, cssIcon]}
      />
      <ProjectCard
        title="Image Editor"
        description={
          <p className="cardDescription">
            A Java application to manipulate and export images.
          </p>
        }
        cardClickedFunction={cardClickedFunction}
        selected={selected}
        icons={[javaIcon]}
      />
      <ProjectCard
        title="The Other Half's News"
        description={
          <p className="cardDescription">
            A news aggregator which sorts articles by political bias.
          </p>
        }
        cardClickedFunction={cardClickedFunction}
        selected={selected}
        icons={[htmlIcon, reactIcon, cssIcon]}
      />
    </div>
  );
};
