import React from "react";
import './../css/homepage.css';

const About = (props) => {
    return (
        <div className="row justify-content-center">
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