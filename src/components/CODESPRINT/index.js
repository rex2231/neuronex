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
          <h1 className="heading">CODE SPRINT SHOWDOWN</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Level up your coding skills and test your speed and wit in
                  this epic challenge! Answer questions, gain time advantages
                  and solve a real-world coding mystery. Think you’re the
                  ultimate code detective? Prove it!
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● Solo event.</li>
                  <li className="list-item">
                    ● Participants must be familiar with either Python, Java or
                    C++.
                  </li>
                  <li className="list-item">● Consists of two rounds.</li>
                  <li className="list-item">
                    ● Participants are not allowed to deviate the tab from the
                    given applications.
                  </li>
                  <li className="list-item">
                    ● Helping the other events during the event is not allowed.
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

export default CODESPRINT;
