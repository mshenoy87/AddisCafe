import React from "react";
import Socials from './../components/Socials';
import About from './../components/About';

const SocialsPage = () => {
    return (
        <div className="container-fluid">
            <h1>Contact Us</h1>
            <Socials isAnimated={false} className={""}/>
            <h1>Follow us on</h1>
            <div class="text-center">
                <p>facebook</p>
                <p>instagram</p>
                <p>yelp</p>
            </div>
        </div>
    );
}

export default SocialsPage;