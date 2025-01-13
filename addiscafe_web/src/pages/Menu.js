import React, {useState, useEffect} from "react";
import "./../css/menu.css";
import axios from 'axios';


const MenuPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/menu')
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // static website doesn't allow for axios calls from the API so we need to save the data and get it in a JSON file
    const sample = require('./../build/menu.json');
    
    return (
        <div class="container">
            <h1>Your order will appear here:</h1>
            <h1>MENU!</h1>
            <div className="grid row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 align-items-center center d-inline-block">
                {sample ? (
                    sample.map((item) => (
                        <div className="col-xs-5 col-sm-4 col-md-3 col-lg-2 item-card" key={item.name}>
                            <div class="mx-auto item-card-info">
                                <h1>{item.name}</h1>
                                <div class="dropdown-group">
                                    <select title="variations">
                                    {
                                        item.variations.map((variation) => (
                                            <option value={variation.name} key={variation.name}>
                                                {variation.name}
                                            </option>         
                                        ))
                                    }
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>
                )}
            </div>
        </div>
    );
}

export default MenuPage;