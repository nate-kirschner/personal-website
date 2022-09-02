import "../styles/aboutMe.scss";
import resume from "../images/Resume.pdf";
import profilePic from "../images/profile-pic.jpg";
import Header from "./Header";
import schoolIcon96 from '../images/schoolIcons/school-96.png';
import workIcon96 from '../images/workIcons/work-96.png';
import resumeIcon96 from '../images/resumeIcons/resume-96.png';
import { useEffect, useState, useRef } from "react";

export default function AboutMe({headerClicked, allRefs, scrollToPage}) {
    
    const fadeInRefs = {
        profile: useRef(),
        school: useRef(),
        work: useRef(),
        resume: useRef()
    }

    const [isVisible, setIsVisible] = useState({ profile: false, school: false, work: false, resume: false });

    const callbackFunc = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const name = entry.target.className.split("iconWrapper ")[1];
                if (!isVisible[name]) {
                    setIsVisible({ ...isVisible, [name]: true});
                }
            }
        })
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunc, options);
        Object.values(fadeInRefs).forEach(ref => {
            observer.observe(ref.current);
        })
        
        return () => {
            Object.values(fadeInRefs).forEach(ref => {
                observer.unobserve(ref.current);
            })
        }

    }, [fadeInRefs, options])

    return (
        <div className="aboutMe" ref={allRefs["About Me"]} >
            <Header title="About Me" clicked={(blurOn) => headerClicked(allRefs["About Me"], blurOn)} allRefs={allRefs} scrollToPage={scrollToPage}/>
            <div className="aboutBox">
                    <div className="iconWrapper profile" ref={fadeInRefs.profile} id={isVisible.profile ? "inView" : "outView"}>
                        <div className="profileDiv">
                            <img className="profilePic" src={profilePic} alt="Profile" loading="lazy"/>
                        </div>
                    </div>
                    <div className="iconWrapper school" ref={fadeInRefs.school} id={isVisible.school ? "inView" : "outView"}>
                        <img src={schoolIcon96} alt="school icon" loading="lazy" />
                    </div>
                    <div className="iconWrapper work" ref={fadeInRefs.work} id={isVisible.work ? "inView" : "outView"}>
                        <img src={workIcon96} alt="work icon" loading="lazy" />
                    </div>
                    <div className="iconWrapper resume" ref={fadeInRefs.resume} id={isVisible.resume ? "inView" : "outView"}>
                        <a href={resume} target="_blank" rel="noreferrer"><img src={resumeIcon96} alt="resume icon" loading="lazy" /></a>
                    </div>
                    <div className="textWrapper profile" id={isVisible.profile ? "inView" : "outView"}>
                        <p>
                            Hi, I'm Nate Kirschner.
                        </p>
                    </div>
                    
                    <div className="textWrapper school" id={isVisible.school ? "inView" : "outView"}>
                        <p>
                            I'm a computer science undergraduate student at Northeastern University with a minor in business administration on track to graduate in May 2024. Within the computer science major, my concentration is software, and I'm interested in working as a software or web developer.
                        </p>
                    </div>
                    
                    <div className="textWrapper work" id={isVisible.work ? "inView" : "outView"}>
                        <p>
                            For my first six month co-op, I've worked as software developer at PowerAdvocate doing full stack web development.
                            <br/>
                            My prior experience includes working as a teaching assistant for the Object Oriented Design class at Northeastern. In addition, I’ve  developed a number of personal projects which you can find in the projects section.    
                        </p>
                    </div> 
                    
                    <div className="textWrapper resume" id={isVisible.resume ? "inView" : "outView"}>
                        <p>
                            <a className="resumeLink" href={resume} target="_blank" rel="noreferrer">
                                Feel free to check out my resume!
                            </a>
                        </p>
                    </div>
            </div>
            <div className="bottomMargin" />
        </div>
    )
}