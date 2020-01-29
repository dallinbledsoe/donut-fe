import React, { useState } from "react";

export default function Card(props) {


  return (
    <div className="profile-card">
        <div className="profile-image">
            <img src={props.donut.image_url}/>
        </div>
        <h2>{props.donut.name}</h2>
        <h3>Price ${props.donut.price}</h3>
        <h3 style={{textAlign: "center"}}>{props.donut.description}</h3>
    </div>
  );
}
