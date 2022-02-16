import React, { useState } from "react";
import weatherDashboard from "../../assets/projects/weatherDashboardThumb.png";
import dogAdoption from "../../assets/projects/DogAdoptionImgThumbnail.png";
import flashShopping from "../../assets/projects/FlashShopping.png";
import "../../styles/Work.css";

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
            />
            <div class="description">
              <h4 class="project-description">My Dog Adoption</h4>
              <p class="project-description">
                {" "}
                Handlebars, CSS, JavaScript, Node, Express, Sequelize
              </p>
            </div>
          </a>
        </div>
        <div class="other-projects">
          <a
            class="project-img"
            href="https://cluck135.github.io/Dog-Adoption-Site//"
            target="_blank"
          >
            <img
              class="other-img"
              src={dogAdoption}
              alt=" of My Dog Adoption Website"
            />
            <div class="description">
              <h4>Weather Dashboard</h4>
              <p> HTML, CSS, JavaScript </p>
            </div>
          </a>
          <a
            class="project-img"
            href="https://scottl5.github.io/Homework-05"
            target="_blank"
          >
            <img
              class="other-img"
              id="second-other"
              src={weatherDashboard}
              alt=" Flash Shopping Website"
            />
            <div class="description">
              <h4>Work Day Scheduler</h4>
              <p> HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
