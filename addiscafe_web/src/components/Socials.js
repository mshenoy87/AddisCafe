import React from "react";
import './../css/socials.css';
import Button from "react-bootstrap/Button";

const Socials = () => { 
    // takes the user inputs to send an email to addiscafe's gmail inbox 
    return (
        <div class="container-fluid my-4">
            <div class="row screen">
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