import React from "react";

import katie from "../images/katie.jpg"



const SCard = ({img, rating, reviewCount, country, title, price}) => { 
    return (
        <div className="card">
            <img src={img} className="card-image" />
            <div className="card--stats">
            <span>{rating}</span>
            <span className="gray">({reviewCount}) · </span>
            <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> /person</p>
        </div>


    )
};

export default SCard;