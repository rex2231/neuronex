import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const BUG = () => {
  document.title = "BUG BASH CHALLENGE";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <div>
            <h1 className="heading">BUG BASH CHALLENGE</h1>
            <div className="timing">(10.00am to 12.00pm)</div>
          </div>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Dive into the heart of innovation at our Symposium's Debugging
                  and Coding Round events! In the Debugging Round, participants
                  will navigate through intricate code, identifying and fixing
                  bugs under time constraints, demonstrating their precision and
                  troubleshooting acumen. Meanwhile, the Coding Round beckons
                  creative minds to tackle complex challenges, designing elegant
                  solutions that stand out in efficiency and ingenuity. Whether
                  you're a seasoned coder or a rising enthusiast, these events
                  offer a platform to showcase your skills, learn from peers,
                  and celebrate the art of programming. Unleash your coding
                  prowess and join us for an exhilarating journey through the
                  realm of technology!
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● Participant must take part individually.
                  </li>
                  <li className="list-item">
                    ● Questions will be based on Python,Java and C++
                  </li>
                  <li className="list-item">
                    ● Two rounds will be conducted which includes Debugging and
                    DSA.
                  </li>
                  <li className="list-item">
                    ● Debugging round consist of 5 questions for each question 5
                    points will be awarded.
                  </li>
                  <li className="list-item">
                    ● DSA round consist of 5 questions for each question 10
                    points will be awarded.(2 easy question,2 medium question,1
                    hard question)
                  </li>
                  <li className="list-item">
                    ● The winners will be selected based on the points secured.
                  </li>
                  <li className="list-item">
                    ● The Participants who raised the hand first for saying the
                    answer will have the preference first.
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
                <li>Sheninth Jr: 9363075474</li>
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

export default BUG;
