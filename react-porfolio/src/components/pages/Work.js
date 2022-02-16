import React, { useState } from "react";
import weatherDashboard from "../../assets/projects/weatherDashboardThumb.png";
import dogAdoption from "../../assets/projects/DogAdoptionImgThumbnail.png";
import flashShopping from "../../assets/projects/FlashShopping.png";
import "../../styles/Work.css";

export default function Work() {
  return (
    <section className="page-section">
      <h3 id="work"> My Work</h3>
      <div className="project-container">
        <div className="headline-div">
          <a
            className="headline-img"
            href="https://vast-ocean-43647.herokuapp.com/"
            target="blank"
          >
            <img
              className="headline-img"
              src={flashShopping}
              alt="Flash Shopping Website"
            />
            <div className="description">
              <h4 className="project-description">Flash Shopping</h4>
              <p className="project-description">
                {" "}
                Handlebars, CSS, JavaScript, Node, Express, Sequelize
              </p>
            </div>
          </a>
        </div>
        <div className="other-projects">
          <a
            className="project-img"
            href="https://cluck135.github.io/Dog-Adoption-Site//"
            target="_blank"
          >
            <img
              className="other-img"
              src={dogAdoption}
              alt=" of My Dog Adoption Website"
            />
            <div className="description">
              <h4>Dog Adoption</h4>
              <p> HTML, CSS, JavaScript </p>
            </div>
          </a>
          <a
            className="project-img"
            href="https://scottl5.github.io/Homework-05"
            target="_blank"
          >
            <img
              className="other-img"
              id="second-other"
              src={weatherDashboard}
              alt=" Flash Shopping Website"
            />
            <div className="description">
              <h4>Weather Dashboard</h4>
              <p> HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
