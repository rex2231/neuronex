import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const MARVEL = () => {
  document.title = "MARVEL MASTERY";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">MARVEL MASTERY</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Calling all tech enthusiasts! Get ready to put your knowledge
                  to the test in our thrilling technical quiz event. Challenge
                  yourself with mind-boggling questions, solve brain teasers,
                  and compete against other brilliant minds. It's the perfect
                  opportunity to showcase your expertise and win exciting
                  prizes!Get ready for an adrenaline-fueled quiz extravaganza!
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● This is a team event (minimum 2 member - maximum 4 members
                    in a team).
                  </li>
                  <li className="list-item">
                    ● There will be two rounds i.e., MCQ Round & Buzzer Round.
                  </li>
                  <li className="list-item">
                    ● In case of a tie, a tie-breaker round will be used to
                    determine the winner.
                  </li>
                  <li className="list-item">
                    ● Participants must adhere to the rules and regulations of
                    the quiz.
                  </li>
                  <li className="list-item">● For every correct answer points will be awarded.</li>
                  <li className="list-item">
                    ● Further details about the event provided during the event.
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
                <li>Tejasree: 8978794332</li>
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

export default MARVEL;
