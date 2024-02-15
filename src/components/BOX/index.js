import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const BOX = () => {
  document.title = "BOX BASH LEAGUE";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <div>
            <h1 className="heading">BOX BASH LEAGUE</h1>
            <div className="timing">(10.00am to 3.15pm)</div>
          </div>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Box cricket is a fast-paced and condensed version of
                  traditional cricket,usually played in a confined space or on a
                  small pitch. It is popular in urban areas were space is
                  limited. Teams typically consist of 5 players, and the game
                  emphasizes quick runs and tight bowling. The playing area is
                  often surrounded by walls or boards, creating an enclosed BOX
                  that adds an extra element of strategy to the game.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● A team consists of 5 players.</li>
                  <li className="list-item">
                    ● 4 overs per team(only 1 bowler can bowl 2 over)
                  </li>
                  <li className="list-item">● Knock-out based.</li>
                  <li className="list-item">● Umpires decision is final.</li>
                  <li className="list-item">
                    ● Registration fee ₹200 per team.
                  </li>
                  <li className="list-item">
                    ● Winners are awarded with ₹1000.
                  </li>
                  <li className="list-item">
                    ● Runners are awarded with ₹500.
                  </li>
                  <li className="list-item">
                    ● Game rules announced before starting the match.
                  </li>
                  <li className="list-item">
                    ● Only 8 teams(First come first serve).
                  </li>
                  <li className="list-item">● Match starts at 10:30 A.M.</li>
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
                <li>Sandeep: 8754799727</li>
              </ul>
            </div>
          </div>
          <button className="button">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScE79igEfEmwlCVL-BeYkvoDu1UBMCGjlaHhCMWEDDbPb-BMQ/viewform?usp=sf_link"
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

export default BOX;
