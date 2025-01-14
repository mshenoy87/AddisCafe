import React, {useState} from "react";

import Socials from './../components/Socials';
import About from './../components/About';

const Homepage = () => {

    return (
        <div class="container-fluid text-center">
            <div class="row homepage-components my-5">
                <div class="col-sm-6">
                    <a href="">
                        <div class="menu-link">
                            <img datatoggle="tool-tip" title="PC: Emma Joy Balma" src={require("../images/store_front/front_counter.JPG")} class="img-responsive" />
                            <h3>Browse the menu!</h3>    
                        </div>
                    </a>
                </div>
                <div class="col-sm-6">
                    <a href="">
                        <div class="menu-link">
                            <img datatoggle="tool-tip" title="PC: Emma Joy Balma" src={require("../images/store_front/outside.JPG")} class="img-responsive" />
                            <h3>Coffee and Merch</h3> 
                        </div>
                    </a>
                </div>
            </div>
            <h1>Get on our mailing list!</h1>
            <Socials />
            <About />

        </div>
    );
}

export default Homepage;