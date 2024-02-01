import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const FFBGMI = () => {
  document.title = "FF X BGMI";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">FF X BGMI</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Free Fire is the ultimate survival shooter game available on
                  mobile. Each 10-minute game places you on a remote island
                  where you are pit against 49 other players, all seeking
                  survival.PlayerUnknown's Battlegrounds (PUBG) is a popular
                  battle royale game that drops players onto an island where
                  they compete to be the last person or team standing. Developed
                  by PUBG Corporation.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● It's a single-player game. Only one player is allowed to
                    play at a time.
                  </li>
                  <li className="list-item">● Hand gestures are used to control the game.</li>
                  <li className="list-item">
                    ● Each player has one chance(life) with a trial gameplay.
                  </li>
                  <li className="list-item">● Before the game begins, the demo will be shown.</li>
                  <li className="list-item">
                    ● Participants playing order is chosen by lottery system.
                  </li>
                  <li className="list-item">
                    ● The primary criteria for choosing the winner is the
                    distance travelled.
                  </li>
                  <li className="list-item">
                    ● If there is a tie, the coins collected will be taken into
                    account.
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
                <li>Sasi: 9949403755</li>
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

export default FFBGMI;
