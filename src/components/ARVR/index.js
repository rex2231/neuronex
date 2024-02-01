import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const ARVR = () => {
  document.title = "AR | VR";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">AR | VR</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Immerse yourself in the future of technology with our AR/VR
                  workshop! Discover the fundamentals of Augmented and Virtual
                  Reality, explore cutting-edge applications, and gain hands-on
                  experience in creating immersive experiences. Whether you're a
                  beginner or an enthusiast, join us for a journey into the
                  captivating realms of AR and VR technology.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● Arrive on time for sessions and adhere to the schedule to
                    avoid disruptions.
                  </li>
                  <li className="list-item">
                    ● Wait for designated Q&A sessions to ask questions, and be
                    concise in your inquiries.
                  </li>
                  <li className="list-item">
                    ● Obtain permission before recording any sessions,
                    presentations, or discussions.
                  </li>
                  <li className="list-item">
                    ● Provide constructive feedback when requested to help
                    improve future symposiums.
                  </li>
                  <li className="list-item">● Bring your laptops with network connection.</li>
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
                <li>Sathish: 1234567890</li>
              </ul>
            </div>
          </div>
          <button className="button"><a href="" target="_blank">REGISTER</a></button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ARVR;
