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
          <h1 className="heading">BUG BASH CHALLENGE</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  It consists of three levels starting from Quiz where certain
                  Questions will be asked followed by debugging includes fixing
                  errors and finally DSA,which involves organising,manipulating
                  data efficient and designing algorithms to solve problems.In
                  Quiz four option will be provided and you must identify the
                  correct option out of it.In DSA round all kinds of problems
                  will be asked.In debugging round certain set of codes will be
                  given and you have to find out the errors.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● Participants must take part individually.</li>
                  <li className="list-item">● Questions will be based on Python,Java and C++ </li>
                  <li className="list-item">
                    ● Three rounds will be conducted which includes
                    Quiz,Debugging and DSA
                  </li>
                  <li className="list-item">
                    ● Quiz consists of 10 Questions,code debugging has 10
                    Questions and DSA has 3 Questions of total 100 points.
                  </li>
                  <li className="list-item">● In case of doubts volunteers will guide you.</li>
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
          <button className="button"><a href="" target="_blank">REGISTER</a></button>
        </div>
      </div>
    </Wrapper>
  );
};

export default BUG;
