import React from "react";
import Image from "react-bootstrap/Image";

const Footer = () => {
    return (
        <footer class="text-center footer">
            <div class="container-fluid p-5">
                <div class="row">
                    <div class="col-sm-4">
                        <Image src={require("../images/addiscafe_logo.png")} width={"50%"} />
                        <p>Photo Credits: Emma Joy Balma</p>
                    </div>
                    <div class="col-sm-4">
                        <p>Home</p>
                        <p>Menu</p>
                        <p>Contact us</p>
                    </div>
                    <div class="col-sm-4 width-100 d-flex ">
                            <h2><a href="https://www.facebook.com/Cafeaddis/"><i class="bi bi-facebook"></i></a></h2>
                            <h2><a><i class="bi bi-yelp"></i></a></h2>
                            <h2><a><i class="bi bi-instagram"></i></a></h2>
                    </div>

                </div>
            </div>

            <div class="text-center p-3 copyright">
                © 2024 Copyright:
                <p><a href="https://github.com/mshenoy87/AddisCafe">Created by: Megha Shenoy</a></p>
            </div>
        </footer>
    );
}

export default Footer;