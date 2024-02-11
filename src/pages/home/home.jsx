import React from "react";
import "./home.css";

function Home() {
  return (
    <main className="main">
      {/* ==================== HOME  */}
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <p className="home__description description">Hi, I am</p>
            <h1 className="home__title title">Mohamed Elshater</h1>
            <h3 className="home__subbtitle subtitle">Front end Developer</h3>
            <div className="home__btns btns">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/17hQnQsdriIDEhk3YA4RcG4DUv0MzKNEw/view?usp=drive_link"
                className="button home__button  btn"
              >
                Download CV
              </a>
            </div>
            <div className="home__social social">
              <a
                href="https://github.com/Elshater6498"
                target="_blank"
                rel="noreferrer"
                className="home__social-link social-link"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-mostafa-elshater-4727111a9/"
                target="_blank"
                rel="noreferrer"
                className="home__social-link social-link"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              {/* <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="home__social-link social-link"
              >
                <i className="bx bxl-codepen"></i>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
