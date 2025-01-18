import React, {useState} from "react";

import Socials from './../components/Socials';
import About from './../components/About';

import "../css/homepage.css";


function Carousel() {

    return (
        <div id="myCarousel" class="carousel slide carousel rounded-5" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner rounded-5" role="listbox">
                <div class="item active">
                    <img class="image" src={require("../images/store_front/outside.JPG" )}alt="Image" />  
                </div>

                <div class="item">
                    <img class="image" src={require("../images/store_front/front_counter.JPG" )} alt="Image" />
                </div>

                <div class="item">
                    <img class="image" src={require("../images/store_front/drinks.JPG" )} alt="Image" />
                </div>
            </div>
        </div>
    );
};


const Homepage = () => {

    return (
        <div class="container-fluid text-center">
            <div class="row homepage-components my-5">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <a href="">
                        <div class="menu-link">
                            <img datatoggle="tool-tip" title="PC: Emma Joy Balma" src={require("../images/store_front/drinks.JPG")} class="img-responsive" />
                            <h3>Browse the menu!</h3>    
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <a href="">
                        <div class="menu-link">
                            <img datatoggle="tool-tip" title="PC: Emma Joy Balma" src={require("../images/store_front/outside.JPG")} class="img-responsive" />
                            <h3>Coffee and Merch</h3> 
                        </div>
                    </a>
                </div>
            </div>

            <div class="container-fluid row about my-4">
                <h1>About</h1>
                <div class="col-xs-12 col-sm-8 col-md-6" title="PC: Emma Joy Balma">
                    <Carousel />
                </div>
                <div class="col-xs-12 col-sm-4 col-md-6">
                    <About className="" />
                </div>
            </div>

            <div class="container-fluid row my-4">
                <div class="col-12">
                    <Socials />
                </div>
            </div>
        </div>
    );
}

export default Homepage;