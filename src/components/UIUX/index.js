import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const UIUX = () => {
  document.title = "UI | UX";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
  <h1 className="heading">UI | UX</h1>
<div className="r-d-container">
  <div className="page-container">
    <div className="description-container">
      <h1 className="sub-heading">Description</h1>
      <p className="description-element">
        In the UI and UX design workshop, participants delve into crafting
        visually appealing interfaces (UI) and optimizing user experiences (UX).
        Through hands-on exercises, they learn design principles, usability
        techniques, and collaboration strategies. The workshop fosters practical
        skills, empowering attendees to create engaging digital solutions that
        prioritize both aesthetics and user satisfaction.
      </p>
    </div>
    <div className="rules-container">
      <h1 className="sub-heading">Rules</h1>
      <ul className="rules-list">
        <li className="list-item">● Arrive on time for sessions and adhere to the schedule to avoid disruptions.</li>
        <li className="list-item">● Bring your laptops in fully charged condition and with internet connection.</li>
        <li className="list-item">● Create an account in FIGMA.</li>
        <li className="list-item">● Wait for designated Q&A sessions to ask questions, and be concise in your inquiries.</li>
        <li className="list-item">● Obtain permission before recording any sessions, presentations, or discussions.</li>
        <li className="list-item">● Provide constructive feedback when requested to help improve future symposiums.</li>
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
    <p className="contacts-header">
      Contacts: 
    </p>  
      <ul className="contacts-list">
        <li>Sriram: 9994912519</li>
      </ul>
  </div>
  </div>
  <button className="button"><a href="" target="_blank">REGISTER</a></button>
</div>
</div>

    </Wrapper>
  );
};

export default UIUX;
