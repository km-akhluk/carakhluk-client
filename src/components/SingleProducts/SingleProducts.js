import React from 'react';
import { Link } from 'react-router-dom';
import './Singleproducts.css'

const SingleProducts = ({ car }) => {
    const { name, price, descliption, img, _id } = car;
    return (
        <div>
            <>
                <div className="col mb-3">
                    <div className="card h-100 card-image">
                        <img src={img} classNameNmae="card-img-top " alt="" />
                        <div className="card-body">
                            <div className="price-time ">
                                <h6>{price}</h6>
                            </div>
                            <h4 className="card-title">{name}</h4>

                            <p className="card-text">{descliption}</p>
                            <Link to={`/placeorder/${_id}`}><button className="Buy-Now">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default SingleProducts;

// [{"_id":"6192574fbc222b38e7s","name":"Wayfarer Sunglasses(Green)","descliption":"Wayfarer Sunglasses(Green) $219.00Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...","price":"2500","days":"","location":"","img":"https://cdn.shopify.com/s/files/1/0014/8842/0958/products/pdt2_medium.jpg?v=1537784707"}]