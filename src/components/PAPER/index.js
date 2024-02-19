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
          <div>
            <h1 className="heading">PAPER PINNACLE</h1>
            <div className="timing">(10.00am to 11.30am)</div>
          </div>
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
                  <li className="list-item">
                    ●Send your abstract to this mail id{" "}
                  
                      <a style={{color:'lightblue'}} href="
                      mailto:paperpinnacle24@gmail.com"> paperpinnacle24@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="topic-container">
                <h1 className="sub-heading">Topics</h1>
                <ul className="rules-list">
                  <li className="list-item">● Agriculture</li>
                  <li className="list-item">● Health Care</li>
                  <li className="list-item">● Education</li>
                  <li className="list-item">● Robotics</li>
                  <li className="list-item">● AI</li>
                  <li className="list-item">● ML & DL</li>
                  <li className="list-item">● AR & VR</li>
                  <li className="list-item">● BlockChain</li>
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
