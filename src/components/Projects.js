import "../styles/projects.scss";
import ProjectCard from "./ProjectCard";
import { useState } from 'react';
import Header from "./Header";

export default function Projects({ headerClicked, allRefs, scrollToPage }) {

    const [selectedProject, setSelectedProject] = useState("");


    const showSideBar = (cardName) => {
        if (selectedProject === cardName) {
            setSelectedProject("")
        } else {
            setSelectedProject(cardName)
        }
    }

    return (
        <div className="projects" ref={allRefs["Projects"]}>
            <Header title="Projects" clicked={(blurOn) => headerClicked(allRefs["Projects"], blurOn)} allRefs={allRefs} scrollToPage={scrollToPage} />
            {cards(showSideBar, selectedProject)}
            <div className="bottomMargin" />
        </div>
    )
}

const cards = (cardClickedFunction, selected) => {
    return (
        <div className="cards">
            <ProjectCard
                title="Best Ball Majors"
                description={<p className="cardDescription">A fantasy golf website hosted on AWS and made with ReactJS/NodeJS.</p>}
                cardClickedFunction={cardClickedFunction}
                selected={selected}
            />
            <ProjectCard
                title="PseudoNote"
                description={<p className="cardDescription">A note taking app for computer science students,</p>}
                cardClickedFunction={cardClickedFunction}
                selected={selected}
            />
            <ProjectCard
                title="Image Editor"
                description={<p className="cardDescription">A Java application to manipulate and export images.</p>}
                cardClickedFunction={cardClickedFunction}
                selected={selected}
            />
            <ProjectCard
                title="The Other Half's News"
                description={<p className="cardDescription">A ReactJS news aggregator which sorts articles by political bias.</p>}
                cardClickedFunction={cardClickedFunction}
                selected={selected}
            />
            <ProjectCard
                title="Recommendr"
                description={<p className="cardDescription">A website for sharing movies/tv shows/books/etc. with friends.</p>}
                cardClickedFunction={cardClickedFunction}
                selected={selected}
            />
        </div>
    )
}