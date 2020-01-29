import React, { useState, useEffect } from "react";
import {  useRoutes, A  } from "hookrouter"
import axios from "axios"

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Auth from "./pages/auth";
import Icons from "./helpers/icons"


function App() {
  Icons()
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  

  useEffect(() => {
    checkLoginStatus()
  }, [])

  const routes = {
    "/": () => <Home loggedInStatus={loggedInStatus}/>,
    "/about": () => <About/>,
    "/contact": () => <Contact/>,
    "/auth": () => <Auth/>
  }
  
  const authorizedRoutes = {
    "/InventoryManager": () => <InventoryManager/>,
    "/": () => <Home loggedInStatus={loggedInStatus}/>,
    "/about": () => <About/>,
    "/contact": () => <Contact/>,
    "/auth": () => <Auth/>
  }
  
  const handleSuccessfulLogin = () => {
    setLoggedInStatus("LOGGED_IN")
  }
  
  const handleUnsuccessfulLogin = () => {
    setLoggedInStatus("NOT_LOGGED_IN")
  }
  
  const handleSuccessfulLogout = () => {
    setLoggedInStatus("NOT_LOGGED_IN")
  }
  
  const checkLoginStatus = () => {
    return axios.get("https://api.devcamp.space/logged_in", { withCredentials: true }).then(response => {
      const loggedIn = response.data.logged_in;
  
      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        setLoggedInStatus("NOT_LOGGED_IN")
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        setLoggedInStatus("NOT_LOGGED_IN")
      } 
    })
    .catch(error => {
      console.log("Error:", error)
    })
  }


  return (
    <div className="app">
      <div className="nav-bar-wrapper">

        <div className="logo">
          Donut shop
        </div>

        <div className="nav-links-wrapper">
          <div className="nav-link-wrapper">
            <A className="nav-link-btn" href="/">Home</A>
          </div>
          <div className="nav-link-wrapper">
            <A className="nav-link-btn" href="/about">About</A>
          </div>
          <div className="nav-link-wrapper">
            <A className="nav-link-btn" href="/contact">Contact</A>
          </div>
        </div>

        <div className="login">
          {loggedInStatus}
        </div>

      </div>

      <div className="donut-space">
        {loggedInStatus === "LOGGED_IN" ? useRoutes(authorizedRoutes) : useRoutes(routes)}
      </div>
  </div>
  )
}

export default App
