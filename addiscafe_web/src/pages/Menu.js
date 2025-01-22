import React, {useState, useEffect} from "react";
import "./../css/menu.css";
import axios from 'axios';

const MenuPage = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/menu')
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    console.log(data);

    // static website doesn't allow for axios calls from the API so we need to save the data and get it in a JSON file
    const sample = require('./../build/menu.json');
    
    return (
        <div class="container-fluid">
            <h1>MENU</h1>
            <div className="row d-block">
                {sample ? (
                    sample.map((item) => (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-3" key={item.name} style={{height: "100%"}}>
                            <div class="item-card bg-yellow-green-text rounded-5 p-4">
                                <h1>{item.name}</h1>
                                <div class="dropdown-group">
                                    <select title="variations" class="rounded-pill p-1" style={{color: "#002255"}}>
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