import React from "react";
import {  useRoutes, A  } from "hookrouter"

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Auth from "./pages/auth";

const routes = {
  "/": () => <Home/>,
  "/about": () => <About/>,
  "/contact": () => <Contact/>,
  "/auth": () => <Auth/>
}


function App() {
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
          Placeholder-logged in status
        </div>

      </div>

      <div className="map-space">
        {useRoutes(routes)}
      </div>
  </div>
  )
}

export default App
