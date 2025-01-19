import React, {useState, useEffect, useRef} from "react";
import { useInView } from 'motion/react';
import emailjs from '@emailjs/browser';

import './../css/socials.css';
import Button from "react-bootstrap/Button";

const Socials = () => { 
    // takes the user inputs to send an email to addiscafe's gmail inbox
    // ref will be set to the screen, which we will animate using reactJS
    const divRef = useRef(null);
    const formRef = useRef();

    const isInView = useInView(divRef);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    // if the element (the screen is in view)
    useEffect(() => {
        var screen = document.getElementById("screen");
        if (isInView) {
            // trigger animation by adding class to classList
            screen.classList.add("screen-animation");
        } else {
            // remove from classList if not in viewport - repeats animation 
            screen.classList.remove("screen-animation");
        }
    }, [isInView])

    
    // handles submit click
    const handleSubmit = (event) => {
        // whole page doesn't reload
        event.preventDefault();

        // set all the form data to appropriate values
        emailjs.init('o2M1JKcSUWePzGdSq');

        const serviceID = "service_yfhifpk";
        const templateID = "template_9jua398";

        // send email to Addis Cafe email (set to my email address for now)
        emailjs.sendForm(serviceID, templateID, "#contact-form").then(
            () => {
              alert("Sent an email!")
            },
            (err) => {
              alert(JSON.stringify(err))
            },
        );
          
        // reset values of the form
        document.getElementById("contact-form").reset();
    }

    return (
        <div class="row screen" id="screen" ref={divRef} >
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
                    <div class="app-form">
                        <form method="POST" class="form" id="contact-form" action="" ref={formRef}>
                            <div class="app-form-group">
                                <input class="app-form-control" id="from_name" name="from_name" placeholder="NAME" />
                            </div>
                            <div class="app-form-group">
                                <input class="app-form-control" id="email" name="email" placeholder="EMAIL" />
                            </div>
                            <div class="app-form-group">
                                <input class="app-form-control" id="subject" name="subject" placeholder="Subject (/20)" maxLength={"20"}/>
                            </div>
                            <div class="app-form-group message">
                                <input class="app-form-control" id="message" name="message" placeholder="MESSAGE" />
                            </div>
                        </form>
                        <div class="app-form-group buttons">
                            <button class="app-form-button" onClick={handleSubmit.bind(this)}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials;