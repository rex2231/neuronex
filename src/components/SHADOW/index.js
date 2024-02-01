import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const SHADOW = () => {
  document.title = "SHADOW CONSPIRACY";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">SHADOW CONSPIRACY</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Gather 2-3 comrades and brave the shadow conspiracy, where
                  cunning riddles and clues guard a shadow of suspicious cases.
                  Outwit the shadow as you navigate escalating difficulty and
                  elimination. Can you unravel the mysteries and claim the
                  prize. The shadow conspiracy awaits…
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● Team must consist of 2-3 comrades</li>
                  <li className="list-item">
                    ● Round 1 has 2 slots and provide 20 minutes per slot
                  </li>
                  <li className="list-item">
                    ● If link is necessary it will be provided otherwise
                    electronic gadgets can be prohibited
                  </li>
                  <li className="list-item">
                    ● Round 1 consists of 12 question (10 cases as questions and 2
                    cases as comprehension)
                  </li>
                  <li className="list-item">● For round 2 we will provide a scenario</li>
                  <li className="list-item">
                    ● Let’s make this event a win-win,together,play it
                    fair,follow the rules, and celebrate everyone’s
                    achievements!
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
                <li>BALA: 9597718899</li>
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

export default SHADOW;
