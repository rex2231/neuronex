import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const PAPER = () => {
  document.title = "PAPER PINNACLE";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">PAPER PINNACLE</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  A paper pinnacle program in our symposium is an event where
                  students present and discuss their original work on a specific
                  topic. This program usually includes an abstract, a
                  presentation, and a Q&A session. The goal is to share new
                  knowledge and get feedback from the audience.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● Team members 1-3 members.</li>
                  <li className="list-item">
                    ● Hard copy must be prepared before arriving the venue.
                  </li>
                  <li className="list-item">
                    ● Time for presentation 5-10 min.
                  </li>
                  <li className="list-item">
                    ● Content must be creative and ideal should not be
                    plagiarism.
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
                <li>Sravan Kumar: 9515871001</li>
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

export default PAPER;
