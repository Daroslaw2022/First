import React from "react";
import "./Second.css"
import SNav from "../components/SNav"
import SCard from "../components/SCard";
import katie from "../images/katie.jpg"
import king from "../images/king.jpg"


const Second = () => {
  return (
    <div>
      <SNav/>
      <SCard
        img  = {katie}
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life lesson with KAtie Zafares"
        price = {136}
      />
            <SCard
        img  = {king}
        rating = "6.0"
        reviewCount = {7}
        country = "RPA"
        title = "Tarrara"
        price = {500}
      />

    </div>
  )};

  export default Second;