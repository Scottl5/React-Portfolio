import React from "react";
import weatherDashboard from "../../assets/weatherDashboardThumb.png";
import dogAdoption from "../../assets/DogAdoptionImgThumbnail.png";
import flashShopping from "../../assets/FlashShopping.png";
import Navbar from "../navbar";

export default function Work() {
  return (
    <section class="page-section">
      <h3 id="work"> My Work</h3>
      <div class="project-container">
        <div class="headline-div">
          <a
            class="headline-img"
            href="https://vast-ocean-43647.herokuapp.com/"
            target="blank"
          >
            <img
              class="headline-img"
              src={flashShopping}
              alt="Flash Shopping Website"
            >
              {" "}
            </img>
            <div class="description">
              <h4 class="project-description">My Dog Adoption</h4>
              <p class="project-description">
                {" "}
                Handlebars, CSS, JavaScript, Node, Express, Sequelize
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
