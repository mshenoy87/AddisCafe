import React from "react";
import Image from "react-bootstrap/Image";

const Footer = () => {
    return (
        <footer class="text-center footer">
            <div class="container p-5">
                <div class="row">
                    <div class="col-sm-4">
                        <Image src={require("../images/addiscafe_logo.png")} width={"75%"} />
                        <p>Photo Credits: Emma Joy Balma</p>
                    </div>
                    <div class="col-sm-4">
                        <p>Home</p>
                        <p>Menu</p>
                        <p>Contact us</p>
                    </div>
                    <div class="col-sm-4 d-flex text-center">
                            <h2 class="px-4"><a href="https://www.facebook.com/Cafeaddis/"><i class="bi bi-facebook"></i></a></h2>
                            <h2 class="px-4"><a href="https://www.yelp.com/biz/addis-cafe-oak-park-3?osq=addis+cafe"><i class="bi bi-yelp"></i></a></h2>
                            <h2 class="px-4"><a href="https://www.instagram.com/addis_cafe/?hl=en"><i class="bi bi-instagram"></i></a></h2>
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