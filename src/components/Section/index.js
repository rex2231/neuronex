import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, ContentTop, ContentMid, Content } from "./section.style";

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
  range,
  speed,
  hp,
  top,
}) {
  return (
    <Wrapper>
      <ContentTop>
        <h2>{title}</h2>
        <p>{slogan}</p>
      </ContentTop>
      <div className="arrow-space">
        {!arrow && (
          <ContentMid className="image-element">
            <div className="flex-container">
              <div className="description-element">
                <p className="text-element">
                  {desc}
                </p>
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
        {range && (
          <Content>
            <div className="Info-bar">
              <div className="Specs">
                <h2>{range} mi</h2>
                <p>Range (EPA est.)</p>
              </div>
              <div className="Specs">
                <h2>{speed}s</h2>
                <p>0-60 mph*</p>
              </div>
              <div className="Specs">
                <h2>{top} mph</h2>
                <p>Top Speed</p>
              </div>
              {hp && (
                <div className="Specs hp">
                  <h2>{hp} hp</h2>
                  <p>Peak Power</p>
                </div>
              )}
              <div className="order_btn">
                <button> ORDER NOW </button>
              </div>
            </div>
          </Content>
        )}
        {arrow && (
          <div className="arrow">
            <img src="/images/down-arrow.svg" alt="arrow" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Section;
