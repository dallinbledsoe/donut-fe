import React from "react";

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
            <div className="happy">Happiness Through Donuts</div>
          </div>
          <div className="body-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ullam aut iste, accusamus vitae fuga repudiandae, impedit explicabo maxime cumque molestiae minima! Laborum illum necessitatibus omnis ut ipsum iusto error?
            Mollitia distinctio eaque et maiores ex nam dolorem asperiores ut suscipit tempora, ab officiis aspernatur placeat consectetur vitae ipsam quae quia illo quos blanditiis cumque sunt pariatur dolores? Veritatis, iste!
            Nam id commodi quam quisquam ratione? Veritatis recusandae cumque nihil, totam perferendis dicta labore tenetur cum repellendus incidunt qui est sunt corporis facilis? Numquam molestiae natus minima corrupti obcaecati debitis.
            Explicabo, dolorem a molestiae iure provident cupiditate id molestias, magni maxime saepe maiores doloribus ad facilis repellendus libero unde. Cupiditate esse corrupti nemo eveniet optio hic accusantium culpa enim? Doloribus?
            Optio dolorem illo maxime animi, consectetur commodi enim libero. 
          </div>
          <div class="section">
                <strong>FUN.</strong>
                <strong>FRESH.</strong>
                <strong>AND WARM.</strong>
                <p>
                    We make our Original Glazed Doughnut the way we always have. Because it’s the right way. The fun way. And we love doing it that way for you – our customer.
                </p>
            </div>
      </div>

    </div>
  ) 
};

export default About;
