import { useEffect, useState } from "react";
import "../styles/home.scss";
import resume from "../images/Resume.pdf";

export default function Home({ allRefs, scrollToPage }) {

    return (
        <div className="homepage" ref={allRefs["Home"]}>
            <div className="title">
                <h1 className="mainTitle">
                    Hi, I'm <div>Nate Kirschner</div>
                </h1>
                <h3 className="titleDescription">
                    A Computer Science Student and Software Developer.
                </h3>
                
            </div >

            <button 
                className="resumeButton" 
                onClick={() => window.open(resume, '_blank', 'noopener,noreferrer')}>
                Resume
            </button>



            {/* <div className="menuBlock">
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["About Me"])}>About Me</h3>
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["Projects"])}>Projects</h3>
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["Experience"])}>Experience</h3>
                <h3 className="menuItem" onClick={() => scrollToPage(allRefs["Contact"])}>Contact</h3>
            </div> */}
        </div >
    )
}