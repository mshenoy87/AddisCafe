import React from "react";

const Footer = () => {
    return (
        <footer class="text-center text-center footer">
            <div class="row">
                <div class="col-sm-4">
                    <h1>Logo</h1>
                    <p>Addis Cafe</p>
                    <a href="#/contact"><p>Follow Us</p></a>
                    <p>Photo Credits: Emma Joy Balma</p>
                </div>
                <div class="col-sm-4 d-flex ">
                        <h1><a><i class="bi bi-facebook"></i></a></h1>
                        <h1><a><i class="bi bi-yelp"></i></a></h1>
                        <h1><a><i class="bi bi-instagram"></i></a></h1>
                </div>
                <div class="text-center p-3 copyright">
                    © 2024 Copyright:
                    <p><a class="text-dark" href="https://github.com/mshenoy87/AddisCafe">Created by: Megha Shenoy</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;