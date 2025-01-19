import React, {useState, useEffect, useRef} from "react";
import { useInView } from 'motion/react';

import './../css/homepage.css';

const About = (props) => {
    const className = props.className;
    const title = props.title;

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        var about = document.getElementById("About");
        if (isInView) {
            about.classList.add("about-animation");
        } else {
            about.classList.remove("about-animation");
        }
    },[isInView])

    return (
        <div id="About" className={className} ref={ref}>
            <h1>{title}</h1>
            <div class="col-sm-12">
                <h2>Location:</h2>
                <h5>801 S Oak Park Avenue, Oak Park IL</h5>
                <div>
                    <h2>Hours open</h2>
                    <h5>Mondays: Closed</h5>
                    <h5>Tuesday - Sunday: 7am - 2pm</h5>
                </div>
                <div>
                    <h2>Phone: </h2>
                    <h5>(708) 712-1558</h5>
                </div>
            </div>
        </div>
        
    );
}

export default About;