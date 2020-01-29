import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  const [ blogModalIsOpen, setBlogModalIsOpen ] = useState(false)
  const [ blogItems, setBlogItems ] = useState([])

  const handleNewBlogClick = () => {
    setBlogModalIsOpen(true)
  }

  const handleDeleteClick = (blog) => {
    axios.delete(`https://donut-be.herokuapp.com/donut/${props.donut.id}`, {withCredentials: true}).then(response => {
        console.log("RESPONSE", response)
        setBlogItems(blogItems.filter(blogItem => {
                return blog.id !== blogItem.id
        }))
    })
    .catch(error => {
        console.log("handleDeleteClick error", error)
    })
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
