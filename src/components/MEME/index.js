import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const MEME = () => {
  document.title = "MEME MIND SUMMIT";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <div>
            <h1 className="heading">MEME MIND SUMMIT</h1>
            <div className="timing">(11.30am to 1.00pm)</div>
          </div>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Think you’ve got the next viral meme? We dare you to prove it.
                  Unleash your inner meme lord in this “ Meme Mind Summit”. The
                  laugh challenge is on. Drop those tired punchlines and whip up
                  some viral gold in our meme creation showdown.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● Each team should register with the proper e-mail id and
                    contact number.
                  </li>
                  <li className="list-item">
                    ● Team should not exceed 3 members.
                  </li>
                  <li className="list-item">● There will be three levels.</li>
                  <li className="list-item">
                    ● In level 1, each teams are said to create memes with the
                    given templates.
                  </li>
                  <li className="list-item">
                    ● The selected teams from level 1 will go to level 2, in
                    which the teams will create memes based on the theme.
                  </li>
                  <li className="list-item">
                    ● At level 3, teams will create a video meme with the given
                    theme.
                  </li>
                  <li className="list-item">
                    ● Avoid sensitive or offensive contents.
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
                <li>Kavi: 9003961061</li>
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

export default MEME;
