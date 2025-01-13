import React, {useState} from "react";

import Socials from './../components/Socials';
import About from './../components/About';

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('./../images/store_front/', false, /\.(png|jpe?g|svg)$/));
console.log(images);

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = (event) => {
        event.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = (event) => {
        event.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" onClick={prevSlide} data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" onClick={nextSlide} data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};


const Homepage = () => {

    return (
        <div class="container-fluid text-center">
            <div class="row homepage-components">
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
            <div class="row homepage-components">
                <div class="col-sm-12">
                    <a href="/">
                            <Carousel />
                            <h3>More Photos</h3>
                    </a>
                </div>
            </div>
            <About />
            <h1>Get on our mailing list!</h1>
            <Socials />
        </div>
    );
}

export default Homepage;