import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  const [ blogModalIsOpen, setBlogModalIsOpen ] = useState(false)

  const handleNewBlogClick = () => {
    setBlogModalIsOpen(true)
  }


  return (
    <div className="profile-card">
        <div className="profile-image">
            <img src={props.donut.image_url}/>
        </div>
        <h2>{props.donut.name}</h2>
        <h3>Price ${props.donut.price}</h3>
        <div className="bottom-container">
        <h3 style={{textAlign: "center"}}>{props.donut.description}</h3>
        {props.loggedInStatus === "NOT_LOGGED_IN" ? (
          <div className="new-blog-link">
              <a onClick={handleNewBlogClick}><FontAwesomeIcon className="add-donut" icon="plus-circle" /></a>
          </div>
      ) : null}
        </div>
        
    </div>
  );
}
