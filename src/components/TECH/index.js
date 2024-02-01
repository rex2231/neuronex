import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const TECH = () => {
  document.title = "TECH UNLEASHED EXPO";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">TECH UNLEASHED EXPO</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Gear up to Greek out! Buckle up for the ultimate project
                  playground. From blueprints to breakthroughs 'Tech Unleashed'
                  Expo allows you to present all your creations. The
                  competitions on!!! Unleash the future.. Dive into mind blowing
                  projects shaping tomorrow.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● This is a team event (minimum 2 member - maximum 4
                    members in a team).
                  </li>
                  <li className="list-item">
                    ● Each team will be granted maximum of 10 minutes to present
                    their projects both software and hardware.
                  </li>
                  <li className="list-item">
                    ● Teams are supposed to have proper documentation, their own
                    gadgets(laptops and pendrives) and presentation proper prototype for the
                    presentation.
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
                <li>Mahiz: 9550171301</li>
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

export default TECH;
