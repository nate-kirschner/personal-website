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
                As part of the Software Development team, I worked on an augmented reality,
                Boston-based scavenger hunt app during the Fall
                Semester of 2020. We met weekly to design and develop the app.
                <br />
                More recently, the team has been working on a virtual reality escape room. 
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
                In doing this, I became more familiar with Python, and Selenium, a web automation tool.
            </p>
        </div>
    ),
    "Object Oriented Design Teaching Assistant": (
        <div className="experienceText">
            <p className="experienceBlockText">
                As a teaching assistant, I was able to reinforce the concepts that I had learned in the class the first time around, and improve on my leadership and communication skills.
                <br /><br />
                I held 5 office hours per week, where I would answer student's questions and explain concepts taught in class. I also lead two labs per week, where I guided students through a problem set and served as a resource to them as they worked. My final responsibility included grading assignments and exams.
            </p>
        </div>
    ),
    "PowerAdvocate Software Developer Coop": (
        <div className="experienceText">
            <p className="experienceBlockText">
                During this six month co-op, I worked as a full stack web developer using ReactJS, NodeJS, and Spring Boot, among other technologies. I utilized AWS tools such as Lambdas, Step Functions, CloudWatch, and EC2.
                <br /><br />
                My responsibilities included picking up stories off of the backlog and completing them in a timely fashion. I got the opportunity to work both independently and pair programming.
                In addition, I was also involved in the recruitment process of future co-ops, doing interviews and planning onboarding workshops and lectures.
                <br /><br />
                For the first three months of my coop, I was on a team of four developers integrating a new feature into the website. This allowed me to become familiar with a large, existing code base in order to make the additions, as well as giving me the experience to create new pages from scratch when necessary.
                <br /><br />
                The second half of the coop was spent on a larger team developing a new dataset for clients. I helped develope a new data pipeline and became familiar with AWS tools such as Step Functions and Lambdas. Once the pipeline work was complete, I went back to web development, creating data panels to display the new dataset and integrating it in the website.
            </p>
        </div>
    )
}