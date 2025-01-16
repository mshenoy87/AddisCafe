import React from "react";
import Socials from './../components/Socials';
import About from './../components/About';

const SocialsPage = () => {
    return (
        <div className="container-fluid">
            <h1>Get On our Mailing List!</h1>
            <Socials />
            <h1>Follow Us on</h1>
            <div class="text-center">
                <p>facebook</p>
                <p>instagram</p>
                <p>yelp</p>
            </div>
        </div>
    );
}

export default SocialsPage;