import React from "react";

import { Wrapper } from "./modely.style";

import Header from "../Header";

const FRAME = () => {
  document.title = "FRAME BY FRAME";
  return (
    <Wrapper>
      <Header />
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">FRAME BY FRAME</h1>
          <div className="r-d-container">
            <div className="page-container">
              <div className="description-container">
                <h1 className="sub-heading">Description</h1>
                <p className="description-element">
                  Frame by frame sounds like a fun and challenging game where
                  proverbs meet picture puzzles! You'd have to decipher the
                  proverb's meaning, analyze the image, and then merge them
                  perfectly to reveal the whole picture and unlock the next
                  proverb-picture combo. It's a brain-teasing blend of wisdom
                  and visual wit, promising hours of puzzling fun for proverb
                  lovers and puzzle enthusiasts alike.
                </p>
              </div>
              <div className="rules-container">
                <h1 className="sub-heading">Rules</h1>
                <ul className="rules-list">
                  <li className="list-item">● It is fully based on buzzer to buzzer rounds.</li>
                  <li className="list-item">● Team must consist of 2 members.</li>
                  <li className="list-item">
                    ● Participants are requested to follow the rules and
                    regulations.
                  </li>
                  <li className="list-item">
                    ● Round 1:Similar pictures will be depicted and participants
                    should find the common word in the pictures.
                  </li>
                  <li className="list-item">● Round 2 :proverbs will be depicted in pictures .</li>
                  <li className="list-item"Y>
                    ● Round 3 :Song middle stanza will be depicted in pictures
                    and participants should find the 1st line of the song.
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
                <li>Arun: 9444157046</li>
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

export default FRAME;
