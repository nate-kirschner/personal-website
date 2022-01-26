import "../styles/aboutMe.scss";
import resume from "../images/Resume.pdf";
import profilePic from "../images/profile-pic.jpg";
import Header from "./Header";

export default function AboutMe({headerClicked, allRefs, scrollToPage}) {

    return (
        <div className="aboutMe" ref={allRefs["About Me"]} >
            <Header title="About Me" clicked={(blurOn) => headerClicked(allRefs["About Me"], blurOn)} allRefs={allRefs} scrollToPage={scrollToPage}/>
            <div className="aboutBox">
                <div className="profileDiv">
                    <img className="profilePic" src={profilePic} alt="Profile"/>
                </div>
                <p className="aboutText">
                    Hi, I'm Nate Kirschner.
                    <br/><br/>
                    Currently, I'm a computer science undergraduate student at Northeastern University with a minor in business administration on track to graduate in May 2024. Within the computer science major, my concentration is software, and I'm interested in working as a software or web developer.
                    <br/><br/>
                    For my first Co-op, I'm gaining experience as a software developer at PowerAdvocate where I'm on the workflow team helping to improve their software.
                    <br/>
                    My prior experience includes working as a teaching assistant for the Object Oriented Design class at Northeastern. In addition, I’ve also developed a number of personal projects you can find in the projects section.     
                    <br/><br/>
                    Please contact me at <a
                    href="mailto:nmkirschner@gmail.com">nmkirschner@gmail.com</a>.
                    or connect with me on <a
                    href="https://www.linkedin.com/in/nathan-kirschner"
                    target="_blank" rel="noreferrer">LinkedIn</a>.
                    <br/><br/>
                    You can find my <div className="red">resume</div> <a href={resume} target="_blank" rel="noreferrer">here</a>.
                </p>
            </div>
            <div className="bottomMargin" />
        </div>
    )
}