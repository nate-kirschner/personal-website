import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import "./contactIcons.scss";

const ContactIcons = ({ variant = "footer" }) => {
  return (
    <div className="contact-icons">
      <a
        href="https://www.linkedin.com/in/nathan-kirschner"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon variant={variant} />
      </a>
      <a
        href="https://github.com/nate-kirschner"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon variant={variant} />
      </a>
      <a href="mailto:nmkirschner@gmail.com" target="_blank" rel="noreferrer">
        <EmailIcon variant={variant} />
      </a>
    </div>
  );
};

export default ContactIcons;
