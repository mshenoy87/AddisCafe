import React, {useState, useEffect, useRef} from "react";
import { useInView } from 'motion/react';
import ContactForm from "./Contact-Form";

import "./../css/socials.css";
import "./../App.css";

const Socials = (props) => { 

    // takes the user inputs to send an email to addiscafe's gmail inbox
    // ref will be set to the screen, which we will animate using reactJS
    const divRef = useRef(null);
    const formRef = useRef();

    const isInView = useInView(divRef);

    // if the element (the screen is in view)
    useEffect(() => {
        var screen = document.getElementById("socials");
        if (isInView) {
            // trigger animation by adding class to classList
            screen.classList.add("social-animation");
        } else {
            // remove from classList if not in viewport - repeats animation 
            screen.classList.remove("social-animation");
        }
    }, [isInView]);

    return (
        <div className="row screen bg-green-yellow-text" id="socials" ref={divRef} >
            <div class="col-xs-12 col-sm-4 col-md-6 text-left">
                <div class="screen-body-item left">
                    <div class="title">
                        <span>CONTACT</span>
                        <span>US</span>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-6 text-right screen-body">
                <div class="screen-body-item">
                    <ContactForm form={formRef}/>
                </div>
            </div>
        </div>
    )
}

export default Socials;