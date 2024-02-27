import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="min-h-[calc(100vh-21.7px)] py-20 md:py-0 px-2 flex max-w-6xl mx-auto">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-8">
        <div className="flex-1 flex flex-col gap-2 text-lg">
          <h3 className="text-3xl">About me</h3>
          <p className="text-text-color-light mb-1.5 leading-7">
            I am <span className="text-first-color">Mohamed</span> ,A
            self-tought software engineer focusing on Front-End web and{" "}
            <span className="text-first-color">Love</span> learning new things,
            <span>
              Since 2020 - I've spent my time seeking and learning new
              technologies and forms of digital expression. This has led me
              working on some amazing world-class projects, Expanded my skills,
              and that makes me more passionate about
            </span>{" "}
            <span className="text-first-color">Programming</span>.
          </p>
          <button className="text-body-color cursor-pointer bg-button-color py-5 px-8 transition duration-200 hover:bg-button-color-alt rounded-md w-fit">
            <Link to="/contact">Contact Me</Link>
          </button>
          <div className="flex gap-4 px-2">
            <a
              href="https://github.com/Elshater6498"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-text-color-light transition duration-300 hover:text-body-color"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mostafa-elshater-4727111a9/"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-text-color-light transition duration-300 hover:text-body-color"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="md:w-72">
          <img className="rounded-md" src="/public/aboutMe.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
