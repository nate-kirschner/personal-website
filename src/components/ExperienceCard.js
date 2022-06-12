import "../styles/experienceCard.scss";
import { useEffect, useState, useRef } from 'react';

export default function ExperienceCard({ titleDiv, title, date, num, onClick, active }) {

    const [isVisible, setIsVisible] = useState(false);
    const fadeInRef = useRef();

    const callbackFunc = (entries) => {
        const [ entry ] = entries;
        if (!isVisible) {
            setIsVisible(entry.isIntersecting);
        }
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunc, options);
        const refCurrent = fadeInRef.current;
        if (refCurrent) {
            observer.observe(refCurrent);
        }
        
        return () => {
            if (refCurrent) {
                observer.unobserve(refCurrent);
            }
        }

    }, [fadeInRef, options])

    const chooseSide = () => {
        return num % 2 === 0 ? "left" : "right";
    }

    return (
        <div
            className={"experienceCard " + chooseSide() + (isVisible ? " inView" : " outView")}
            style={{ gridRowStart: `${num}` }}
            onClick={() => onClick(title, chooseSide())}
            id={active === title ? "active" : "non-active"}
            ref={fadeInRef}
        >

            <div className="horizontalBar" />
            <div className="experienceBlock">
                {titleDiv}
                <p className="date">{date}</p>
                {
                    active === title && experienceText[title]
                }
            </div>
        </div>
    )
}

const experienceText = {
    "Started At Northeastern University": (
        <div className="experienceText">
            <p className="experienceBlockText">Major: Computer Science</p>
            <p className="experienceBlockText">Minor: Business Administration</p>
            <p className="experienceBlockText">Expected Graduation: 2024</p>
            <p className="experienceBlockText">GPA: 3.84 / 4.00</p>
        </div>
    ),
    "NEU Virtual Reality Club Member": (
        <div className="experienceText">
            <p className="experienceBlockText">
                As part of the Software Development team, I worked on a virtual reality,
                Boston-based scavenger hunt app during the Fall
                Semester of 2020. We met weekly to design and develop the app. The app
                is not yet finished, but should be ready soon.
                <br /><br />
                Through this experience, I gained a
                working knowledge of Unity and C#. I also became more comfortable
                working as a member of a team.
                <br /><br />
            </p>
        </div>
    ),
    "Webscraping Freelance": (
        <div className="experienceText">
            <p className="experienceBlockText">
                During March 2021, I was hired as an independent contractor to gather
                information from the web
                about HVAC companies in the United States. I wrote a script in Python
                which parsed through a list of all 40,000 zipcodes
                in the U.S. I collected the business information of about 15,000 HVAC
                companies and provided it in an excel sheet.
                <br /><br />
                In doing this, I became more familiar with Python, a language I've used
                in a few classes so far, and Selenium, a web automation tool.
            </p>
        </div>
    ),
    "Object Oriented Design Teaching Assistant": (
        <div className="experienceText">
            <p className="experienceBlockText">
                As a teaching assistant, my responsibilities include holding office
                hours, teaching and assisting in labs, and grading assignments. By
                teaching other students the material for this Object Oriented Deisgn
                class, I have reinforced the material for myself and gained a better understanding of Object-Oriented principles.
            </p>
        </div>
    ),
    "PowerAdvocate Software Developer Coop": (
        <div className="experienceText">
            <p className="experienceBlockText">
                This is my current co-op position which will end in July 2022. I am working on the Workflow team at PowerAdvocate. Through this experience I have gained a better understanding of their tech stack, which includes ReactJS, NodeJS, and a number of databases and other technologies. 
            </p>
        </div>
    )
}