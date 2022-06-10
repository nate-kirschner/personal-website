import "../styles/header.scss";
import React, { useState, useRef } from 'react';

export default function Header({ title, clicked, allRefs, scrollToPage }) {

    const titles = ["Home", "About Me", "Projects", "Experience", "Contact"];

    const [blur, setBlur] = useState(false);
    const headerRef = useRef(null);
    const titleRef = useRef(null);

    const clickHeader = () => {
        if (blur) {
            document.body.style.overflow = "auto";
            headerRef.current.style.position = "sticky";
        } else {
            headerRef.current.style.position = "relative";

            scrollToSmoothly(headerRef.current.offsetTop, 300);

            document.body.style.overflow = "hidden";
        }

        clicked(!blur);
        setBlur(!blur);
    }

    const clickMenu = (title) => {
        clickHeader();
        setTimeout(() => scrollToPage(allRefs[title]), 1);
    }

    const displayMenuAbove = () => {
        let before = true;
        return (
            <div className="headerMenu above" id={blur ? "blur" : "nonBlur"}>
                {
                    titles.map((t, index) => {
                        if (t === title) {
                            before = false;
                            return null;
                        } else {
                            if (before && allRefs[t].current) {
                                return <h3 className="menuItem" key={index}
                                    id={index % 2 === 0 ? "even" : "odd"}
                                    onClick={() => clickMenu(t)}
                                >{titles[index]}</h3>
                            } else {
                                return null;
                            }
                        }
                    })
                }
            </div>
        )
    }

    const displayMenuBelow = () => {
        let after = false;
        return (
            <div className="headerMenu below" id={blur ? "blur" : "nonBlur"}>
                {
                    titles.map((t, index) => {
                        if (t === title) {
                            after = true;
                            return null;
                        } else {
                            if (after && allRefs[t].current) {
                                return <h3 className="menuItem" key={index}
                                    id={index % 2 === 0 ? "even" : "odd"}
                                    onClick={() => clickMenu(t)}
                                >{titles[index]}</h3>
                            } else {
                                return null;
                            }
                        }

                    })
                }
            </div>
        )
    }

    return (
        <div className="header" id={blur ? "blur" : "nonBlur"} ref={headerRef}>
            {
                displayMenuAbove()
            }
            <h2 className="title" ref={titleRef}
                onClick={() => clickHeader()}
            >
                {title}
                {!blur && <div className="dropdownTriangle" /> }
            </h2>
            {
                blur && titleRef.current &&
                (
                    <div className="blurBackground top" onClick={() => clickHeader()}
                        style={{ position: "fixed", top: "0" }}
                    />
                )
            }
            {
                displayMenuBelow()
            }

        </div>
    )
}

function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    console.log(pos)
    console.log(currentPos)
    var start = null;
    pos = +pos;
    time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}