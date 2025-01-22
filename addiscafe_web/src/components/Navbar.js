import React from "react";
import Image from "react-bootstrap/Image";
import "./../App.css";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md my-2 mx-5 bg-gray-red-text rounded-5 px-auto">
            <img class="navbar-brand mx-0" href="#/" src={require("../images/addiscafe_logo_dark.png")} style={{minWidth: "auto", minHeight: "10vh"}} />
            <button type="button" title="button" class=" mx-5 btn-sm navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                <span class="navbar-toggler-icon"></span>                 
            </button>
            <div class=" navbar-collapse justify-content-md-center collapse nav-pills" id="myNavbar">
                <ul class="nav navbar-nav rounded-5 mx-auto">
                    <li class="nav-item">
                    <a href="#/" class="nav-link px-5" aria-current="page">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#/menu" class="nav-link px-5">MENU</a>
                    </li>
                    <li class="nav-item">
                        <a href="#socials-info" class="nav-link px-5">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;