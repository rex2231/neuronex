import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const CODESPRINT = () => {
  document.title = "CODE SPRINT SHOWDOWN";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <div>
            <h1 className="heading">CODE SPRINT SHOWDOWN</h1>
            <div className="timing">(11.30am to 1.00pm)</div>
          </div>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  "Hack the future, one line at a time! Our hackathon is a
                  celebration of innovation, collaboration, and sheer coding
                  brilliance. Join us for an electrifying experience where your
                  code has the power to shape the future. Are you up for the
                  challenge?"
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Evalutaion</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● Code Clarity: The code should be well-structured,
                    optimized and easy to understand.
                  </li>
                  <li className="list-item">
                    ● Impact: The solution should assess the real-world impacts
                    i.e., whether the solution addresses a genuine problem and
                    has practical applications.
                  </li>
                  <li className="list-item">
                    ● The decision of the judge will be final.
                  </li>
                </ul>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● A team can have up to 4 members.
                  </li>
                  <li className="list-item">● Consists of only one round.</li>
                  <li className="list-item">
                    ● Helping the other participants during the event is not
                    allowed.
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
                <li>Prem: 9566371391</li>
              </ul>
            </div>
          </div>
          <button className="button">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfLQPdT31ARCphlOtI9vTOy9sOjwrkKqF6ZLj39S8Kbrg7O8g/viewform?vc=0&c=0&w=1&flr=0"
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

export default CODESPRINT;
