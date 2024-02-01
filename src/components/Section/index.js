import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, ContentTop, ContentMid } from "./section.style";
import CLOCK from "../CLOCK";

function Section({
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
        {arrow ? (
          <>
            <h1>{title}</h1>
            <p>{slogan}</p>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <p>{slogan}</p>
          </>
        )}
      </ContentTop>
      <div className="arrow-space">
        {!arrow && (
          <ContentMid className="image-element">
            <div className="flex-container">
              <div className="description-element">
                <p className="text-element">{desc}</p>
              </div>
              <div className="image-container">
                <img
                  className="imageElement"
                  src={`/images/${backgroundImg}`}
                />
              </div>
            </div>
          </ContentMid>
        )}
        {arrow && (
          <ContentMid>
            <CLOCK />
          </ContentMid>
        )}
        <ContentMid className={arrow ? "" : "buttons"}>
          {leftbtn && (
            <div className="right">
              <Link to={{ pathname: link }}>
                <button>MORE DETAILS</button>
              </Link>
            </div>
          )}
          {rightbtn && (
            <a href={regLink}>
              <div className="left">
                <button>REGISTER NOW</button>
              </div>
            </a>
          )}
        </ContentMid>
      </div>
    </Wrapper>
  );
}

export default Section;
