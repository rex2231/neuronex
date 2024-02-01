import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const FLICKER = () => {
  document.title = "FLICKER FUSION";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">FLICKER FUSION</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Lights, camera, action! At the symposium’s short film event,
                  witness the magic of storytelling unfold on the big screen. Be
                  prepared to laugh,cry and be moved by these incredible films
                  crafted by talented filmmakers. It’s an event you won’t want
                  to miss!
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● There is no particular theme for the short film.</li>
                  <li className="list-item">● The shortfilm needs to be prepared beforehand.</li>
                  <li className="list-item">● Each team must contain 3 – 6 members.</li>
                  <li className="list-item">● Films once entered cannot be withdrawn.</li>
                  <li className="list-item">
                    ● The duration for the short film must be from 5min – 10
                    min.
                  </li>
                  <li className="list-item">
                    ● It must be original and any kind of watermark shouldn’t be
                    on the film.
                  </li>
                  <li className="list-item">● The film must be of highest quality possible.</li>
                  <li className="list-item">
                    ● Any kind of Adult content will not be entertained and
                    would lead to direct disqualification.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contacts-flex">
            <div className="contacts-container">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p className="contacts-header">Contacts:</p>
              <ul className="contacts-list">
                <li>MANISH: 9790251503</li>
              </ul>
            </div>
          </div>
          <button className="button">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform"
              target="_blank"
            >
              REGISTER
            </a>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default FLICKER;
