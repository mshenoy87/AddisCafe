import React from "react";
import './../css/socials.css';
import Button from "react-bootstrap/Button";

const Socials = () => { 
    return (
        <div class="grid subscriber-container d-flex align-items-center" id="contact-us">
            <div class="col-md-4">
                <h3>Receive updates and popup-shop information</h3>
            </div>

            <div class="col-md-4 subscribe-input">
                <form method="POST" id="contact-form" action="">
                    <div class="name" className="subscriber-name">
                        <input class="subscriber-first-name" type="first name" name="first-name" placeholder="First Name (required)" />
                        <input class="subscriber-last-name" type="last name" name="last-name" placeholder="Last Name (required)" />
                    </div>
                    <div class="email">
                        <input type="email" name="email" placeholder="Email (required)" required />
                    </div>
                </form>
                <Button className="signUpButton rounded-pill" size="lg" type="submit">Sign Up</Button>
            </div>
        </div>
    )
}

export default Socials;