import React, {useState} from "react";

import Socials from './../components/Socials';
import About from './../components/About';
import InfoCard from "../components/InfoCard";

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
                    <img class="image" src={require("../images/store_front/outside.JPG" )} alt="Image" />
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
        <div className="container-fluid my-4 text-center top-0">            
            <div class="row bg-red-yellow-text my-4 p-5" title="PC: Emma Joy Balma">
                <div class="col-sm-8">
                    <div class="container-fluid">
                        <Carousel />  
                    </div>
                </div>
                <div class="col-sm-4 my-auto p-3 about">
                    <div class=" row justify-content-center rounded-5 align-items-center my-2">
                        <h3>Waffles, scones, and more!</h3>
                        <h4>Free Wifi, Kid Friendly, Vegetarian</h4>
                    </div>
                    <div class="row justify-content-center rounded-5 align-items-center my-2">                    
                        <h5>Our Story:</h5>
                    </div>
                </div>
            </div>

            <div className="row">
                <div class="col-xs-12 col-sm-6 my-auto">
                    <About title={"About"} className={"bg-gray red-text rounded-5 container-fluid py-4 my-auto"} />
                </div>
                <div className="col-xs-12 col-sm-6 my-4 justify-content-end mx-auto" id="socials-info">
                    <Socials />
                </div>
            </div>
        </div>
    );
}

export default Homepage;