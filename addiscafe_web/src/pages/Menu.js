import React, {useState} from "react";
import "../css/menu.css";
// import {axios} from 'axios';

function ShoppingCart({cart}) {

    // calculates the total price of items in cart and rounds it to two decimal places
    const calculateTotal = () => {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += parseFloat(cart[i].price) * parseInt(cart[i].quantity);
        }
        // total = cart.array.forEach(item => {parseFloat(item.price) * parseInt(item.quantity)});
        return total.toFixed(2);

    }
    return (
            <div className="bg-gray rounded-5 py-1">
                <div className="h1">Shopping Cart</div>

                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul className="px-4 my-5">
                    {cart.map((c, index) => (
                        <div className="row p-5 m-2 rounded-5 bg-green yellow-text text-center" key={index}>
                            <div className="h4 col-xs-12 col-sm-4 col-md-12 text-center">{c["name"]}: </div>
                            {c["variation"] ? (
                                <div class="col">
                                    <div className="h4 col-xs-4 col-sm-4 col-md-4 text-center">{c["variation"]}</div>
                                    <div className="h4 col-xs-5 col-sm-4 col-md-4 text-center">{c["quantity"]}x </div>
                                    <div className="h4 col-xs-3 col-sm-4 col-md-4 text-center">${c["price"]} {"/each"}</div>
                                </div>
                                ) : (
                                <div className="col">
                                    <div className="h4 col-xs-5 col-sm-5 col-md-5 text-center">{c["quantity"]}x = </div>
                                    <div className="h4 col-xs-7 col-sm-7 col-md-7 text-center">${c["price"]} {"/each"}</div>
                                </div>
                            )}
                            <div class="col-xs-1 text-center btn-outline-none btn-sm remove-from-cart">
                                <i className="bi bi-x h2"></i>
                            </div>
                        </div>
                        
                    ))}
                    </ul>
                )}
                <div className="my-2 h3">Total: ${calculateTotal()}</div>
        </div>
    )
}

function ItemCard({item, addToCart}) {
    const [variation, setVariation] = useState(item.variations[0]);

    return (
        <div key={item.name} style={{height: "100%"}}>
            <div className="h1">{item.name}</div>
            {(item.variations.length > 1 && (
                <div className="dropdown-group">
                    <select title="variations" 
                            className="rounded-pill p-1"
                            style={{color: "#002255"}}
                            onChange={(e) => setVariation(item.variations.find((v) => v.name === e.target.value))}>
                    {item.variations.map((variation) => (
                        <option value={variation.name} key={variation.name} >{variation.name}</option>         
                        ))
                    }
                    </select>
                </div>
                )
            )}
            <button className="btn btn-lg bg-blue brown-text rounded-pill add-to-cart my-3" 
                onClick={() => {addToCart({ name: item.name, variation: (variation.name !== "Regular" && variation.name), price: variation.price })}}>
                    Add to Cart
            </button>

        </div>
    );
}




function MenuPage() {
    const [cart, setCart] = useState([]);
    // const [data, setData] = useState(null);
    

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:5000/menu')
    //         .then(response => setData(response.data))
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);

    // static website doesn't allow for axios calls from the API so we need to save the data and get it in a JSON file
    const sample = require('../build/menu.json');

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existsInCart = prevCart.findIndex(
                (cartItem) => cartItem.name === item.name && cartItem.variation === item.variation
            );

            if (existsInCart !== -1) {    // not found in cart
                return prevCart.map((cartItem, index) =>
                    index === existsInCart
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    return (
        <div className="container-fluid row text-center">
            <div className="col-sm-12 col-md-4 rounded-5 my-5">
                <ShoppingCart cart={cart} />
            </div>
            
            
            <div className="col-sm-12 col-md-8 my-4">
                <h1>MENU</h1>

                <div className="row">
                    {sample ? (sample.map((item, index) => (
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 p-3" key={index}>
                                <div className="item-card bg-yellow green-text rounded-5 py-5">
                                    <ItemCard item={item} addToCart={addToCart}/>
                            </div>
                        </div>
                    ))
                ) : (
                            <div className="spinner-grow" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        )
                    }
                    </div>
            </div>
        </div>
    );
}

export default MenuPage;