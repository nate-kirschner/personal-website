import { useEffect, useState } from "react";
import "../styles/home.scss";
import resume from "../images/Resume.pdf";

export default function Home({ allRefs, scrollToPage }) {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (animate) {
            setTimeout(() => setAnimate(false), [1500]);
        }
    }, [animate])

    return (
        <div className="homepage" ref={allRefs["Home"]}>
            <div className="titleBlock">
                <h1 className={"mainTitle " + (animate && "animate")} 
                >
                        Hi, I'm&nbsp;
                        <div className="letters" onClick={() => setAnimate(true)}>
                            <div className="letter">N</div>
                            <div className="letter">a</div>
                            <div className="letter">t</div>
                            <div className="letter break">e</div>&nbsp;
                            <div className="letter">K</div>
                            <div className="letter">i</div>
                            <div className="letter">r</div>
                            <div className="letter">s</div>
                            <div className="letter">c</div>
                            <div className="letter">h</div>
                            <div className="letter">n</div>
                            <div className="letter">e</div>
                            <div className="letter">r</div>
                            .
                        </div>
                        
                    {/* Hi, I'm Nate Kirschner. */}
                </h1>
                <h2 className="titleDescription">A Computer Science Student and Aspiring Software Developer.</h2>
                <button className="resumeButton" onClick={() => window.open(resume, '_blank', 'noopener,noreferrer')}>Resume</button>
            </div >
            <div className="menuBlock">
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["About Me"])}>About Me</h3>
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["Projects"])}>Projects</h3>
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["Experience"])}>Experience</h3>
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["Contact"])}>Contact</h3>
            </div>
        </div >
    )
}