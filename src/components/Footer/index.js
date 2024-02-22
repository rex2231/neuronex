import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, ContentTop, ContentMid } from "./section.style";
import CLOCK from "../CLOCK";
import Bottom from "./Bottom";

function FOOTER() {
  return (
    <Wrapper>
      <ContentTop>
        <h1>TEASER</h1>
      </ContentTop>
      <div className="arrow-space">
        <ContentMid className="image-element">
          <div className="flex-container">
            <div className="description-element">
              <p className="text-element">
                Discover the forefront of technological evolution at Neuronex
                2024, the national-level symposium orchestrated by the brilliant
                minds of the Artificial Intelligence & Data Science department
                at Velammal Institute of Technology. Neuronex is more than just
                an event; it's an immersive experience designed to celebrate,
                explore, and push the boundaries of AI and Data Science.
              </p>
            </div>
            <div className="image-container">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/z9NqDmFUkVw?si=OUzPKWX6WRboUypY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="overall-spon">
            <h1 className="spon">Sponsors</h1>
            <div className="spon">
              <img className="image-sponsors" src="images/meridian.png" />
              <h3>V Prakash(Sr.Manager)</h3>
            </div>
            <div className="sponsors">
              <div>
                <img className="image-sponsors" src="images/green.png" />
              </div>
              <div>
                <img className="image-sponsors" src="images/trends.png" />
              </div>
              <div>
                <img className="image-sponsors" src="images/bharat.jpg" />
              </div>
              <div>
                <img className="image-sponsors" src="images/poorvika.png" />
              </div>
            </div>
          </div>
        </ContentMid>
      </div>
      <Bottom />
      <ContentMid></ContentMid>
    </Wrapper>
  );
}

export default FOOTER;
