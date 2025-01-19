import React, {useState, useEffect, useRef} from "react";
import { useInView } from 'motion/react';

import './../css/socials.css';
import Button from "react-bootstrap/Button";

const Socials = () => { 
    // takes the user inputs to send an email to addiscafe's gmail inbox
    // ref will be set to the screen, which we will animate using reactJS
    const ref = useRef(null);
    const isInView = useInView(ref);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        subject: "",
        message: ""
    });


    // if the element (the screen is in view)
    useEffect(() => {
        console.log(isInView);
        var screen = document.getElementById("screen");
        if (isInView) {
            // trigger animation by adding class to classList
            screen.classList.add("screen-animation");
        } else {
            // remove from classList
            screen.classList.remove("screen-animation");
        }
      }, [isInView])

      const handleSubmit = (event) => {
        event.preventDefault();
      }

    return (
        <div class="container-fluid my-4 screen-container">
            <div class="row screen" id="screen" ref={ref} >
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
                            <div class="app-form-group">
                                <input class="app-form-control" placeholder="NAME" />
                            </div>
                            <div class="app-form-group">
                                <input class="app-form-control" placeholder="EMAIL" />
                            </div>
                            <div class="app-form-group">
                                <input class="app-form-control" placeholder="Subject (/20)" maxLength={"20"}/>
                            </div>
                            <div class="app-form-group message">
                                <input class="app-form-control" placeholder="MESSAGE" />
                            </div>
                            <div class="app-form-group buttons">
                                <button class="app-form-button">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials;