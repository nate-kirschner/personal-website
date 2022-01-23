import "../styles/experience.scss";
import ExperienceCard from "./ExperienceCard";
import { useState } from 'react';
import Header from './Header';

export default function Experience({ headerClicked, allRefs, scrollToPage }) {

    const [activeCard, setActiveCard] = useState("none");
    const [side, setSide] = useState("none");
    const [expanded, setExpanded] = useState(false)

    const onClick = (card, side) => {
        if (activeCard !== card) {
            setActiveCard(card);
            setSide(side);
        } else {
            setActiveCard("none");
            setSide("none");
        }
    }

    return (
        <div className="experience" ref={allRefs["Experience"]}>
            <Header title="Experience" clicked={(blurOn) => headerClicked(allRefs["Experience"], blurOn)} allRefs={allRefs} scrollToPage={scrollToPage} />
            <div className={"timelineDiv " + (expanded ? "expanded" : "")} id={side}>
                <div className="timelineBar" />
                <ExperienceCard
                    titleDiv={<h3 className="cardTitle">PowerAdvocate Software Developer Coop</h3>}
                    title="PowerAdvocate Software Developer Coop"
                    date="Jan 2022 - July 2022"
                    num={1}
                    onClick={onClick}
                    active={activeCard}
                />
                <ExperienceCard
                    titleDiv={<h3 className="cardTitle"><div className="red">Object Oriented</div> Design Teaching Assistant</h3>}
                    title="Object Oriented Design Teaching Assistant"
                    date="Sep 2021 - Dec 2021"
                    num={2}
                    onClick={onClick}
                    active={activeCard}
                />
                <ExperienceCard
                    titleDiv={<h3 className="cardTitle">Webscraping Freelance</h3>}
                    title="Webscraping Freelance"
                    date="Mar 2021 - April 2021"
                    num={3}
                    onClick={onClick}
                    active={activeCard}
                />
                <ExperienceCard
                    titleDiv={<h3 className="cardTitle">NEU Virtual Reality Club Member</h3>}
                    title="NEU Virtual Reality Club Member"
                    date="Sep 2020 - Present"
                    num={4}
                    onClick={onClick}
                    active={activeCard}
                />
                <ExperienceCard
                    titleDiv={<h3 className="cardTitle">Started At <div className="red">Northeastern</div> University</h3>}
                    title="Started At Northeastern University"
                    date="Sep 2020 - Present"
                    num={5}
                    onClick={onClick}
                    active={activeCard}
                />
            </div>
            <div className="expandButton" onClick={() => setExpanded(!expanded)}>
                <div className="horLine" />
                <div className="circle" />
                <div className="arrowLeft" />
                <div className="arrowRight" />
            </div>

        </div>
    )
}