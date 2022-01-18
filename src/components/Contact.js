import "../styles/contact.scss";
import Header from "./Header";

export default function Contact({headerClicked, allRefs, scrollToPage}) {
    return (
        <div className="contact" ref={allRefs["Contact"]}>
            <Header title="Contact" clicked={(blurOn) => headerClicked(allRefs["Contact"], blurOn)} allRefs={allRefs} scrollToPage={scrollToPage}/>
            <div className="contactBox">
                <a className="contactLink" href="mailto:nmkirschner@gmail.com" target="_blank" rel="noreferrer">
                    <h4 className="contactTitle">Email</h4>
                    <p className="contactInfo">nmkirschner@gmail.com</p>
                </a>
            </div>
            <div className="contactBox">
                <a className="contactLink" href="https://www.linkedin.com/in/nathan-kirschner" target="_blank" rel="noreferrer">
                    <h4 className="contactTitle">LinkedIn</h4>
                    <p className="contactInfo">www.linkedin.com/in/nathan-kirschner</p>
                </a>
            </div>
            <div className="contactBox">
                <a className="contactLink" href="https://github.com/nate-kirschner" target="_blank" rel="noreferrer">
                    <h4 className="contactTitle">Github</h4>
                    <p className="contactInfo">https://github.com/nate-kirschner</p>
                </a>
            </div>
        </div>
    )
}