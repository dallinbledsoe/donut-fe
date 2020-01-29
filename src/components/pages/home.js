import React, { useState } from "react";
import axios from "axios"

import Card from "./donut-card"


export default function DonutSpace(props) {
    const [donuts, setDonuts ] = useState([])

    React.useEffect(() => {
        axios.get("https://donut-be.herokuapp.com/donuts")
        .then(response => {
            console.log(response.data)
            setDonuts(response.data)
            console.log(response)
        })
        .catch(error => {
            console.log("data base axios error", error);
        })
    }, [])
    
    const readDb = () => {
       return donuts.map(donut => {
            return (
                <div key={donuts.id} className="card-button-wrapper">
                    <Card donut={donut} loggedInStatus={props.loggedInStatus}/>
                    <button className="order-button">Order placeholder</button>
                </div>
            )
            
        })
    }


    return(
        <div className="card-space">
            {readDb()}
        </div>
        
    )

  
}