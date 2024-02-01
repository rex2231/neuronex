import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const UTOPIA = () => {
  document.title = "UTOPIA UI";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">UTOPIA UI</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Level up your design game: Push the boundaries of your skill
                  in UI/UX. A great oppurtunity to showcase your UI designer
                  skills. The competition on! Unleash your UI creativity and
                  dominate the competition, build the interface that transports
                  users to another world.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">
                    ● The team must contain minimum 1 or maximum 2 members.
                  </li>
                  <li className="list-item">
                    ● 3 themes will be provided participants can choose one of
                    there interest.
                  </li>
                  <li className="list-item">
                    ● Each team will be provided 30 mins to design their
                    interface.
                  </li>
                  <li className="list-item">
                    ● The best 2 wins cash prize and other teams will be
                    provided exotic gifts.
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
                <li>Amrita: 8784596172</li>
              </ul>
            </div>
          </div>
          <button className="button"><a href="" target="_blank">REGISTER</a></button>
        </div>
      </div>
    </Wrapper>
  );
};

export default UTOPIA;
