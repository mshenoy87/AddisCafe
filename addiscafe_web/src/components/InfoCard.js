import React, {useState, useEffect, useRef} from "react";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";

function StyleSheet() {
    return (
        <style>{`
            #example {
              width: 100%;
              max-width: 200%
              position: relative;
            }

            #example .bg {
                stroke: var(--layer);
            }

            #example ul {
                display: flex;
                list-style: none;
                height: 220px;
                overflow-x: scroll;
                padding: 20px 0;
                flex: 0 0 600px;
                margin: 0 auto;
                gap: 20px;
            }

            #example li {
                flex: 0 0 200px;
                background: var(--accent);
            }

    `}</style>
    )
}

const InfoCard = (props) => {
    const title = props.title ? props.title : "";
    const className = props.className ? props.className : "my-1 mx-auto";

    const ref = useRef(null);

    return (
        <motion.div whileHover={{scale: 1.05}}
                whileInView={{scale: 0.9}}
                whileTap={{scale: 0.8}} >
                    <div className={className} ref={ref}>
                        <div class="col-12 my-4 p-2">
                            <h3>{title}</h3>
                            <div id="example" className="container-fluid">
                                <ul>
                                    <li style={{ background: "#616852" }}></li>
                                    <li style={{ background: "#616852" }}></li>
                                    <li style={{ background: "#616852" }}></li>
                                </ul>
                                <StyleSheet />
                            </div>
                        </div>
                        
                    </div>
        </motion.div>
    );
}

export default InfoCard;