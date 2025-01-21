import React, {useRef} from "react";
import emailjs from '@emailjs/browser';


function ContactForm(props) {
    const formRef = props.form;
    
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

    return <div class="app-form">
                <form method="POST" class="form" id="contact-form" action="" ref={formRef}>
                    <div class="app-form-group">
                        <input class="app-form-control" id="from_name" name="from_name" placeholder="NAME" />
                    </div>
                    <div class="app-form-group">
                        <input class="app-form-control" id="from_email" name="from_email" placeholder="EMAIL" />
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
}

export default ContactForm;