import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="main-container">
      <div className="bio text-center">
        <div className="bio-text">
          <h1 className="title ">My story in short...</h1>
          <h4 className="intro">
            With all that has been going on in 2020, I thought: <br />
            <span className="bold">“what best way to come out of it?”</span> and
            the answer was
            <span className="bold"> “better than I went in!”</span>.
          </h4>
          <br />
          <p>
            After my job in hospitality ended due to COVID, with my new found
            time, I took a leap of faith and pivoted my profession towards
            becoming software engineer. After months of self-education and
            attending Columbia University Fullstack immersive course, I got the
            chance to work at
            <a
              title="go visit cobalt website"
              className="cobalt"
              href="https://cobalt.co/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              Cobalt{" "}
            </a>
            as a Frontend Engineer (ReactJS). I am now looking to make my mark
            and grow with a fulltime position!
          </p>
          <p>
            The road ahead, I’m sure will not be easy but nothing worth doing
            comes easy.
            <br />
            Well organized, analytical, decisive, coupled with a passion for
            exceeding expectations - proven ability to self-teach and learn new
            skills quickly.
            <br />
            When I'm not coding, I watch documentaries and bake (i.e eat)
            delicious Canelés from Bordeaux!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
