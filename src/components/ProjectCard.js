import "../styles/projectCard.scss";
import bestBallHome from "../images/bestBall/bbm-home.png";
import bestBallRoster from "../images/bestBall/bbm-roster.png";
import bestBallLeaderboard from "../images/bestBall/bbm-leaderboard.png";
import bestBallLeagues from "../images/bestBall/bbm-leagues.png";

import imageProcessAddLayer from "../images/imageEditor/ImageProcessorAddLayer.png";
import imageProcessImport from "../images/imageEditor/ImageProcessImport.png";
import imageProcessLayers from "../images/imageEditor/ImageProcessLayers.png";
import imageProcessAlter from "../images/imageEditor/ImageProcessAlter.png";
import imageProcessBlur from "../images/imageEditor/ImageProcessBlur.png";
import imageProcessSharpen from "../images/imageEditor/ImageProcessSharpen.png";
import imageProcessGrayscale from "../images/imageEditor/ImageProcessGrayscale.png";
import imageProcessSepia from "../images/imageEditor/ImageProcessSepia.png";
import imageProcessMosaic from "../images/imageEditor/ImageProcessMosaic.png";

import rmsHome from '../images/rateMySite/rmsHome.png';
import rmsBrowse from '../images/rateMySite/rmsBrowse.png';
import rmsPost from '../images/rateMySite/rmsPost.png';

import tohNews from "../images/TOHNews.png";

import pseudonotetext from '../images/pseudonote/pseudonotetext.jpeg';
import pseudonotecode from '../images/pseudonote/pseudonotecode.jpeg';

import { useEffect, useState, useRef } from 'react';

export default function ProjectCard({ title, description, cardClickedFunction, selected, icons }) {

    const viewInTabIcon = <img className="viewInNewTabIcon" alt="View in new tab icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAqklEQVRIie2Quw0CMRBEx4gWOJFcP1RyEpSLA3KukEdiEDL+7Nkmgsls7cybXemvLQJOwEpBb7PVGUlyEeAuaS6VcM65J6A2k9rgo0FNwAG45jboAgAT4IPNDwVEzW/AcRggFW7yWwC58CGAUrhJJUB3eAlgDW860ZbmrYBL+PbAlDW3AsL/uRbeBbAq5d+1hln1dcA+eq+S5p4zhYyX4g2WeKAhfOnw/6IeM2CpfvHVCrkAAAAASUVORK5CYII=" loading="lazy"></img>

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

    return (
        <div
            className={"projectCard " + (isVisible ? "inView" : "outView")}
            onClick={() => cardClickedFunction(title)}
            id={selected === title ? "selected" : "not-selected"}
            ref={fadeInRef}
        >
            <h3 className="cardTitle">{title}</h3>
            {
                title === "The Other Half's News" && (
                    <a href="https://tohnews.com" target="_blank" rel="noreferrer">
                        {viewInTabIcon}
                    </a>
                )
            }
            {
                title === "Best Ball Majors" && (
                    <a href="https://bestballmajors.com" target="_blank" rel="noreferrer">
                        {viewInTabIcon}
                    </a>
                )
            }
            {
                title === "PseudoNote" && (
                    <a href="https://devpost.com/software/pseudonote-q56bih" target="_blank" rel="noreferrer">
                        {viewInTabIcon}
                    </a>
                )
            }
            {
                title === "Rate My Site" && (
                    <a href="https://ratemysite.xyz" target="_blank" rel="noreferrer">
                        {viewInTabIcon}
                    </a>
                )
            }
            {description}
            {
                selected === title && projectSlides[title]
            }
            <div className="skillIcons">
                {
                    icons.map(icon => {
                        return <img className="skillIcon" src={icon} alt="icon for the tool used in this project" loading="lazy" />
                    })
                }
            </div>
        </div>
    )
}

const projectSlides = {
    "Rate My Site": [
        <div className="projectContent" key={1}>
            <p className="projectText">
                I made this website to be a collection of personal websites for developers. It serves as a place to seek inspiration from others, and to receive feedback on your own work. <br />
                The frontend is made with React, and the serverless backend is deployed with AWS Lambda, RDS, and API Gateway.
            </p>
            <img className="projectImage" src={rmsHome}
                alt="Rate My Site Home" 
                loading="lazy"
            />
        </div>,
        <div className="projectContent" key={2}>
            <p className="projectText">
                On the browse page, you can view all of the posted websites. A post consists of a title, an iframe with the website, and an optional comment section. <br />
                You can change the sorted order of the posts by clicking the Browse button in the header and selecting an option from the dropdown.
            </p>
            <img className="projectImage" src={rmsBrowse}
                alt="Rate My Site Browse" loading="lazy" />
        </div>,
        <div className="projectContent" key={2}>
        <p className="projectText">
            On the post page, you can give your post a title, url, and an optional description. Once posted, you will get a link to view your post, but it won't appear on the browse page until it gets approved.
        </p>
        <img className="projectImage" src={rmsPost}
            alt="Rate My Site Post" loading="lazy" />
    </div>
    ],
    "Best Ball Majors": [
        <div className="projectContent" key={1}>
            <p className="projectText">
                This is a website I built that allows users to build fantasy golf rosters, create and join leagues with friends, and compete with other users. I used ReactJs, NodeJs/Express, and a MySQL database, and hosted the site on an AWS EC2. When the site launched in June 2021, it attracted about 30 users.
            </p>

        </div>,

        <div className="projectContent" key={2}>
            <img className="projectImage" src={bestBallHome}
                alt="Best Ball Project Home" 
                loading="lazy"
            />
            <p className="projectText">
                Above is the home page of Best
                Ball Majors. It displays a leaderboard
                of the current PGA golf tournament. Each row in the table can be
                clicked to reveal a dropdown displaying the full scorecard for each
                player.
            </p>
        </div>,

        <div className="projectContent" key={3}>
            <img className="projectImage" src={bestBallLeagues}
                alt="Best Ball Project Create League" loading="lazy" />
            <p className="projectText">
                After navigating to Leagues page, there
                is the option to create or join a league. This allows users to play
                in
                tournaments specifically with their friends.
            </p>
        </div>,

        <div className="projectContent" key={4}>
            <img className="projectImage" src={bestBallLeaderboard}
                alt="Best Ball Project Leaderboard" loading="lazy" />
            <p className="projectText">
                The leaderboard page above shows a
                leaderboard with all users on the website.
            </p>
        </div>,

        <div className="projectContent" key={5}>
            <img className="projectImage" src={bestBallRoster}
                alt="Best Ball Project Roster" loading="lazy" />
            <p className="projectText">
                This is an example of a roster.
                Users have the option to choose four
                players for their roster each week and the best score from each hole is used
                to
                calculate the total.
            </p>
        </div>
    ],
    "PseudoNote": [
        <div className="projectContent" key={14}>
            <p className="projectText">
                I built this project with a partner during a 48 hour hackathon. We were tired of taking notes for computer science classes with text editors that couldn't format code correctly. Our site allows users to switch between code and text formatting, and download and upload files.
            </p>
        </div>,
        <div className="projectContent" key={15}>
            <p className="projectText">
                We used ReactJs to make the website. You can read more about our process <a href="https://devpost.com/software/pseudonote-q56bih" target="_blank" rel="noreferrer">here</a>.
            </p>
        </div>,
        <div className="projectContent">
            <img className="projectImage" src={pseudonotetext}
                alt="PseudoNote Text View" loading="lazy" />
            <img className="projectImage" src={pseudonotecode}
                alt="PseudoNote Code View" loading="lazy" />
        </div>
    ],
    "Image Editor": [
        <div className="projectContent" key={6}>
            <p className="projectText">
                In this Object Oriented Design class assignment I worked with a partner to create a Java application capable of performing multiple image processing operations. 
                We used the Model, View,
                Controller
                pattern and the GUI was made with Java Swing.
                <br /><br />
            </p>
        </div>,

        <div className="projectContent" key={7}>
            <img className="projectImage" src={imageProcessAddLayer}
                alt="Editor Project Add Layer" loading="lazy" />
            <p className="projectText">As shown above, the first step is always to create a
                new layer. As many layers as needed can be created and each one
                can have a different image, but each layer must be of the same
                dimensions.</p>
        </div>,

        <div className="projectContent" key={8}>
            <img className="projectImage" src={imageProcessImport}
                alt="Editor Project Import/Export" loading="lazy" />
            <p className="projectText">Once a layer is created, the user can
                import
                an image from their computer, create a checkerboard image for
                which
                they will be asked the dimensions, or they can (tediously) create
                an
                image by inputting the RGB values of every pixel. <br /><br />The supported
                image types are PNG, JPEG, and PPM. <br /><br />Users can export ("save")
                individual layers as one of these types of image files, or they
                can
                export all layers which will create a text file with a script to
                reupload the layers back into the program.</p>
        </div>,

        <div className="projectContent" key={9}>
            <img className="projectImage" src={imageProcessLayers}
                alt="Editor Project Layer Operations" loading="lazy" />
            <p className="projectText">In this Layer Operations tab above, users have the ability to
                remove
                layers, swap layers, and toggle the visibility of layers. If a
                layer
                is marked invisible it won't be displayed and won't be
                exported.</p>
        </div>,

        <div className="projectContent" key={10}>
            <img className="projectImage" src={imageProcessAlter}
                alt="Editor Project Operations" loading="lazy" />
            <p className="projectText">The Alter Image tab shows the image operations available.
                Images can be blurred, sharpened, turned to grayscale or sepia,
                downsized, or mosaiced. </p>
        </div>,

        <div className="projectContent exampleImageSlide" key={11}>
            <p className="projectText">Here are some examples of what can be
                produced.</p>
            <div className="slideshow">
                <div className="pictures">
                    <img className="projectImage" src={imageProcessBlur}
                        alt="Editor Project Blur" loading="lazy" />
                    <img className="projectImage" src={imageProcessSharpen}
                        alt="Editor Project Sharpen" loading="lazy" />
                    <img className="projectImage" src={imageProcessMosaic}
                        alt="Editor Project Mosaic" loading="lazy" />
                    <img className="projectImage" src={imageProcessGrayscale}
                        alt="Editor Project Grayscale" loading="lazy" />
                    <img className="projectImage" src={imageProcessSepia}
                        alt="Editor Project Sepia" loading="lazy" />
                </div>
            </div>
        </div>
    ],
    "The Other Half's News": [
        <div className="projectContent" key={12}>
            <p className="projectText">
                I've noticed that my news feed tends to contain the same sources over and over again, leading to a lack of diversity in the opinions I've been exposed to. To combat this, I wanted to create a resouces to help myself and others see the other side of the political spectrum that normally might not get as much exposure. The Other Half's News is a website I
                created to solve this problem. It pulls articles from 13 news sources,
                each of which I've ranked based on political bias and displayed
                accordingly.
                <br /><br />
                The website is made with React. I used axios to make calls to an API
                which I'm pulling the news stories from.
                <br /><br />
                You can visit the website at <a href="https://tohnews.com" target="_blank" rel="noreferrer">tohnews.com</a>
            </p>
            <img className="projectImage tohNewsImage" src={tohNews}
                alt="TOH News Page" loading="lazy" />
        </div>
    ],
    "Recommendr": [
        <div className="projectContent" key={13}>
            <p className="projectText">
                Worked with a partner to make a website 
            </p>
        </div>
    ]
}