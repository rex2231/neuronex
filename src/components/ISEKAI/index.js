import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const ISEKAI = () => {
  document.title = "ISEKAI BAKA'S";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">ISEKAI BAKA'S</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Calling all anime fans, weebs, and shonen enthusiasts! Dust
                  off your knowledge scrolls and prepare to unleash your inner
                  otaku! We’re throwing an anime quiz event that will challenge
                  your expertise, ignite your fandom, and leave you shouting
                  “Dattebayo!” with glee.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● Round 1 have 2 slots, 20 mins per slot. </li>{" "}
                  <li className="list-item">● Teams must consists of two members.</li>{" "}
                  <li className="list-item">● Expected time limit is maximum 20 mins.</li>{" "}
                  <li className="list-item">● Questions will be provided on spot.</li>{" "}
                  <li className="list-item">● Round 1 consists 15 questions.</li>{" "}
                  <li className="list-item">● In round 2, dialogues and images will be provided.</li>{" "}
                  <li className="list-item">● Teams must respect the rules and regulations.</li>
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
                <li>Sabari: 6374043623</li>
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

export default ISEKAI;
