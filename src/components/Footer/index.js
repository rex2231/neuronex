import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, ContentTop, ContentMid } from "./section.style";
import CLOCK from "../CLOCK";
import Bottom from "./Bottom";

function FOOTER({
  title,
  slogan,
  desc,
  regLink,
  backgroundImg,
  link,
  leftbtn,
  rightbtn,
  arrow,
}) {
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
              <video
                width="460"
                height="auto"
                src="TEASER.mp4"
                controls
                autoplay="false"
              ></video>
            </div>
          </div>
        </ContentMid>
        <ContentMid></ContentMid>
      </div>
      <Bottom/>
    </Wrapper>
  );
}

export default FOOTER;
