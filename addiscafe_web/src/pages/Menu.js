import React, {useState, useEffect} from "react";
import "../css/menu.css";

import {axios} from 'axios';

function ShoppingCart(props) {

    return (
        <div class="">

        </div>
    )

}

function ItemCard(props) {
    const item = props.item;

    return (
        <div key={item.name} style={{height: "100%"}}>
            <div class="h1">{item.name}</div>
            {(item.variations.length > 1 ? (
                <div class="dropdown-group">
                    <select title="variations" class="rounded-pill p-1" style={{color: "#002255"}}>
                    {item.variations.map((variation) => (
                        <option value={variation.name} key={variation.name} >{variation.name}</option>         
                        ))
                    }
                    </select>
                </div>
                ) : null
            )}
        </div>
    );
}




const MenuPage = () => {
    // const [data, setData] = useState(null);
    const [cart, setCart] = useState([]);
    

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:5000/menu')
    //         .then(response => setData(response.data))
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);

    // static website doesn't allow for axios calls from the API so we need to save the data and get it in a JSON file
    const sample = require('../build/menu.json');

    const addToCart = (event) => {
        event.preventDefault();

        // parent div where the button was clicked at
        const parent = event.target.parentElement;

        // item data to be passed into the shopping cart
        var item = {
            name: parent.querySelector(".h1").innerText,
            variation: parent.querySelector("select") ? parent.querySelector("select").value : ""
        }

        setCart((cart) => [...cart, item]);
    
    }

    return (
        <div class="container-fluid row">
            <div className="col-sm-12 col-md-4 rounded-5 my-4">
                <div class="h1">Shopping Cart</div>
                <div class="bg-gray rounded-5">
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul className="px-4 py-5 my-5">
                        {cart.map((c) => (
                            <div class="row p-4 m-3 rounded-5 bg-green yellow-text">
                                <div class="h4 col-lg-4">{c["name"]}: </div>
                                <div class="h5 col-lg-4">{c["variation"] ? c["variation"] : ""}</div>
                                <div class="h4 col-lg-4">x1 = </div>
                            </div>
                        ))}
                        </ul>
                    )}
                    <p className="my-2">Total: ${0}</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-8 my-4">
                <h1>(MOCK) MENU</h1>
                {sample ? (sample.map((item) => (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-3">
                            <div class="item-card bg-yellow green-text rounded-5 py-5">
                                <ItemCard item={item} isMenuItem/>
                                <button class="btn btn-lg bg-blue brown-text rounded-pill add-to-cart my-3" onClick={addToCart}>Add to Cart</button>
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