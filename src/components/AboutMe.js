import "../styles/aboutMe.scss";
import resume from "../images/Resume.pdf";
import profilePic from "../images/profile-pic.jpg";
import Header from "./Header";
import schoolIcon96 from '../images/schoolIcons/school-96.png';
import workIcon96 from '../images/workIcons/work-96.png';
import resumeIcon96 from '../images/resumeIcons/resume-96.png';

export default function AboutMe({headerClicked, allRefs, scrollToPage}) {

    return (
        <div className="aboutMe" ref={allRefs["About Me"]} >
            <Header title="About Me" clicked={(blurOn) => headerClicked(allRefs["About Me"], blurOn)} allRefs={allRefs} scrollToPage={scrollToPage}/>
            <div className="aboutBox">
                    <div className="iconWrapper profile">
                        <div className="profileDiv">
                            <img className="profilePic" src={profilePic} alt="Profile"/>
                        </div>
                    </div>
                    <div className="iconWrapper school">
                        <img src={schoolIcon96} />
                    </div>
                    <div className="iconWrapper work">
                        <img src={workIcon96} />
                    </div>
                    <div className="iconWrapper resume">
                        <a href={resume} target="_blank" rel="noreferrer"><img src={resumeIcon96} /></a>
                    </div>
                    <div className="textWrapper profile">
                        <p>
                            Hi, I'm Nate Kirschner.
                        </p>
                    </div>
                    
                    <div className="textWrapper school">
                        <p>
                            I'm a computer science undergraduate student at Northeastern University with a minor in business administration on track to graduate in May 2024. Within the computer science major, my concentration is software, and I'm interested in working as a software or web developer.
                        </p>
                    </div>
                    
                    <div className="textWrapper work">
                        <p>
                            For my first six month co-op, I've worked as software developer at PowerAdvocate doing full stack web development.
                            <br/>
                            My prior experience includes working as a teaching assistant for the Object Oriented Design class at Northeastern. In addition, I’ve  developed a number of personal projects which you can find in the projects section.    
                        </p>
                    </div> 
                    
                    <div className="textWrapper resume">
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