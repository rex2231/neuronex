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
                  Build,Break ,innovate join the 'codesprint showdown'
                  revolution,Gear up,hacker!,The coding marathon is on ,level up
                  your skills,design for good win big,launch your ideas.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● A team must contains 2 to 4 members.</li>
                  <li className="list-item"> 
                    ● Teams can use Libraries,frameWork and opensource code.
                  </li>
                  <li className="list-item">
                    ● Involvement of Staffs,Volunteers or higher Position
                    Members prohibited
                  </li>
                  <li className="list-item">
                    ● But a team can gain advices and support from
                    organizers,volunteers sponsers and others
                  </li>
                  <li className="list-item">
                    ● There are two rounds in hackathon ,Each round has 45 mins
                    to do their coding
                  </li>
                  <li className="list-item">● Team must stop hacking once the time is up.</li>
                  <li className="list-item">
                    ● Teams are allowed to debug and make small fixes to their
                    program after time is up.
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
                <li>MAHAVARSHINI: 9600361142</li>
              </ul>
            </div>
          </div>
          <button className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScxgCmKPe6EtGGv6lIZODUsNPmnL3K52cUDLRGEHaxgLD9S0w/viewform" target="_blank">REGISTER</a></button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CODESPRINT;
