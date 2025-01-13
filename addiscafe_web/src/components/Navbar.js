import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse navbar-expand-lg navbar-scroll align-items-center">
            <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand" href="#/"><p>Addis Cafe</p></a>
                </div>
                
                <div class="collapse navbar-collapse nav-text" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                    <a href="#/" class="nav-link"><p>HOME</p></a>
                    </li>
                    <li class="nav-item">
                        <a href="#/menu" class="nav-link"><p>MENU</p></a>
                    </li>
                    <li class="nav-item">
                        <a href="#/contact" class="nav-link"><p>CONTACT US</p></a>
                    </li>
                    {/* <li class="nav-item">
                    <a href="#/" class="nav-link"><p>LOG IN</p></a>
                    </li> */}
                </ul>
                </div>
                <ul class="nav navbar-nav navbar-right">
                <li>
                    <button type="button" title="button" class="navbar-toggle navbar-brand" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>                       
                    <span class="icon-bar"></span>                       
                    <span class="icon-bar"></span>                      
                    </button>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;