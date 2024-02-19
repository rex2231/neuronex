import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const FRAME = () => {
  document.title = "FRAME BY FRAME";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <div>
            <h1 className="heading">FRAME BY FRAME</h1>
            <div className="timing">(11.30am to 2.30pm)</div>
          </div>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Frame by frame" seems like an entertaining and difficult game
                  that combines picture puzzles with movie titles and proverbs!
                  To uncover the entire picture and open the next
                  proverb-picture combination, you would need to interpret the
                  meaning of the proverb, evaluate the image, and then precisely
                  combine the two. For fans of proverbs and puzzles alike, this
                  brainteaser blend of wisdom and visual wit promises hours of
                  entertaining puzzles.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    1.Buzzer to buzzer rounds serve as its sole foundation.
                  </li>
                  <li className="list-item">
                    2.There must be two people on the team.
                  </li>
                  <li className="list-item">
                    3. It is requested of participants to abide by the guidelines
                  </li>
                  <li className="list-item">
                    ● Round 1: Participants must identify the correct word
                    between two similar images, movie titles, and proverbs that
                    are displayed.
                  </li>
                  <li className="list-item">
                    ● Round 2: Memory challenge: questions based on an image
                    collage will be posted, along with the display of an image
                    collage.
                  </li>
                  <li className="list-item" Y>
                    ● Round 3: The middle stanza of the song will be presented
                    to participants in the form of pictures, find the song.
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
                <li>Abinesh:9080805855</li>
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

export default FRAME;
