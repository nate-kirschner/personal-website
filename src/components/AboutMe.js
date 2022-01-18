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
                    I'm a <div className="red">Computer Science</div> student at Northeastern
                    University with a minor in Business Administration. Within the
                    computer science
                    major, my concentration is Software, and I'm interested in working
                    as a Software or Web Developer.
                    <br/><br/>
                    I'm currently working as a Software Developer <div className="red">Co-op</div> at PowerAdvocate. I'm on the workflow team helping to improve their software. Before this, I worked as a teaching aassistant for the Object Oriented Design class at Northeastern.
                    <br/><br/>
                    If you want to contact me, my email is <a
                    href="mailto:nmkirschner@gmail.com">nmkirschner@gmail.com</a>.
                    Or you can find me on <a
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