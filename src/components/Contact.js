import "../styles/contact.scss";
import Header from "./Header";
import { useEffect, useState, useRef } from 'react';

export default function Contact({headerClicked, allRefs, scrollToPage}) {

    const fadeInRefs = {
        email: useRef(),
        linkedin: useRef(),
        github: useRef()
    }

    const [isVisible, setIsVisible] = useState({ email: false, linkedin: false, github: false});

    const callbackFunc = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const name = entry.target.className.split("contactBox ")[1];
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
        <div className="contact" ref={allRefs["Contact"]}>
            <Header title="Contact" clicked={(blurOn) => headerClicked(allRefs["Contact"], blurOn)} allRefs={allRefs} scrollToPage={scrollToPage}/>
            <div className="contactBox email" ref={fadeInRefs.email} id={isVisible.email ? "inView" : "outView"}>
                <a className="contactLink" href="mailto:nmkirschner@gmail.com" target="_blank" rel="noreferrer">
                    <h4 className="contactTitle">Email</h4>
                    <p className="contactInfo">nmkirschner@gmail.com</p>
                </a>
            </div>
            <div className="contactBox linkedin" ref={fadeInRefs.linkedin} id={isVisible.linkedin ? "inView" : "outView"}>
                <a className="contactLink" href="https://www.linkedin.com/in/nathan-kirschner" target="_blank" rel="noreferrer">
                    <h4 className="contactTitle">LinkedIn</h4>
                    <p className="contactInfo">www.linkedin.com/in/nathan-kirschner</p>
                </a>
            </div>
            <div className="contactBox github" ref={fadeInRefs.github} id={isVisible.github ? "inView" : "outView"}>
                <a className="contactLink" href="https://github.com/nate-kirschner" target="_blank" rel="noreferrer">
                    <h4 className="contactTitle">Github</h4>
                    <p className="contactInfo">https://github.com/nate-kirschner</p>
                </a>
            </div>
        </div>
    )
}