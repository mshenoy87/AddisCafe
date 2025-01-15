import React from "react";
import './../css/homepage.css';

function Carousel() {

    return (
        <div id="myCarousel" class="carousel slide carousel-page" data-ride="carousel">

            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="image" src={require("../images/store_front/outside.JPG" )}alt="Image" />  
                </div>

                <div class="item">
                    <img class="image" src={require("../images/store_front/front_counter.JPG" )} alt="Image" />
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
};


const About = () => {
    return (
        <div class="container-fluid my-4">
            <div className="row justify-content-center about">
                <div class="col-sm-6" title="PC: Emma Joy Balma">
                    
                    <Carousel />
                </div>
                <div class="col-sm-6">
                    <h2>About</h2>
                    <div className="col-sm-6">
                        <h2>Location:</h2>
                        <h5>801 S Oak Park Avenue, Oak Park IL</h5>
                        <h2>Hours open</h2>
                        <h5>Mondays: Closed</h5>
                        <h5>Tuesday - Sunday: 7am - 2pm</h5>
                    </div>
                    <div className="col-sm-6">
                        <h2>Email: </h2>
                        <div>
                            <h2>Phone: </h2>
                            <h5>(708) 712-1558</h5>
                        </div>
                        <h1>Est. 2016</h1>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default About;