import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const VIBRATO = () => {
  document.title = "VIBRATO VISION";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">VIBRATO VISION</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Experience the intriguing game Vibrato Vision, created
                  especially for the symposium, and lose yourself in its
                  rhythmic exhilaration. As you touch, swipe, and groove to the
                  beats, test your musical prowess and advance through the
                  levels of melodic proficiency. Vibrato Vision offers gamers an
                  immersive gameplay experience and a dynamic soundtrack, making
                  it an unforgettable symposium for all music lovers.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● Buzzer to buzzer rounds serve as its sole foundation.
                  </li>
                  <li className="list-item">
                    ● There must be two people on the team.
                  </li>
                  <li className="list-item">
                    ● It is requested of participants to abide by the
                    guidelines.
                  </li>
                  <li className="list-item">
                    ● Round 1: The song’s background music will be played, and
                    players must locate the song.
                  </li>
                  <li className="list-item">
                    ● Round 2: A certain song line will be eliminated and
                    participants have to find the line of the song.
                  </li>
                  <li className="list-item">
                    ● Round 3: The players will need to locate the song once it
                    has been reversed.
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
                <li>Elango: 9840624826</li>
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

export default VIBRATO;
