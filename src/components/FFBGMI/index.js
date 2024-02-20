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
          <div>
            <h1 className="heading">FF X BGMI</h1>
            <div className="timing">(10.00am to 3.15pm)</div>
          </div>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <li className="description-element">
                  Free Fire is the ultimate survival shooter game available on
                  mobile. Each 10-minute game places you on a remote island
                  where you are pit against 49 other players, all seeking
                  survival.
                  <li className="description-element">
                    Two teams consisting of four players each will play against
                    each other. At the start of each round each team's players
                    can only stay in their area and they can only buy weapons
                    and items in the shop using their Balance which they gain at
                    the start of the game and by doing other stuff each round.
                  </li>
                </li>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● A team must consist of a minimum of four members and
                    maximum of six members.
                    <li className="list-item">
                      {" "}
                      ● All matches are in Battle Royale Squad Mode.
                    </li>
                  </li>
                  <li className="list-item">
                    ● Hand gestures are used to control the game.
                  </li>
                  <li className="list-item">
                    ● Each player has one chance(life) with a trial gameplay.
                  </li>
                  <li className="list-item">
                    ● Before the game begins, the demo will be shown.
                  </li>
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
