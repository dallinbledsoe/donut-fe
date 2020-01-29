import React from "react";
import profilePicture from "../../../static/assets/images/donuts.jpg";

import aboutPicture from "../../../static/assets/images/donuts.jpg"

const About = () => {
  return (
    <div className="about-content-wrapper">

      <div className="left-column" >
        <img className="about-image" src={aboutPicture} />
      </div>

      <div className="right-column">
          <div className="heading">
            <h2><em>About Donut Shop</em></h2>
            <h1 className="happy">Happiness Through Donuts</h1>
          </div>
          <div className="body-text">
           
            <div class="our">
              <div class="copy">
                  <strong>OUR MISSION</strong>
                  <p>
                      To make the most awesome doughnuts on the planet every single day.
                  </p>
              </div>

              <div class="copy">
                  <strong>OUR COMMUNITY</strong>
                  <p>
                      Giving back to our communities through fundraising and philanthropic work is at our core.
                  </p>
              </div>
              <div class="copy">
                  <strong>OUR BELIEF</strong>
                  <p>
                      Things are better enjoyed together, especially the sweet fluffy clouds of deliciousness we call doughnuts.
                  </p>
              </div>
        </div>
          </div>
          <div className="donut">
          <div class="copy">
                <strong>FUN.</strong>
                <br></br>
                <strong>FRESH.</strong>
                <br></br>
                <strong>AND WARM.</strong>
                <p>
                    We make our Original Glazed Doughnut the way we always have. Because it’s the right way. The fun way. And we love doing it that way for you – our customer.
                </p>
            </div>
          </div>
          
      </div>

    </div>
  ) 
};

export default About;
