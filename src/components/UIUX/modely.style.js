import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-x: hidden;

  .bg-image {
    background-image: linear-gradient(to top, lightblue, #fff8e7);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .rules-list {
    list-style-type: none;
  }

  .heading {
    font-size: 30px;
    padding-bottom: 30px;
  }
  .timing {
    padding-bottom:30px;
    font-size: 20px;
    font-weight:bold;
  }
  a{
    text-decoration:none
  }

  // pc
  @media screen and (min-width: 768px) {
    .page-container {
      display: flex;
      justify-content: space-evenly;
      min-width: 80vw;
      min-height: 30vh;
    }

    .container {
      margin-top: 75px;
      margin-bottom: 75px;
      text-align: center;
    }

    .description-container,
    .rules-container {
      max-width: 40vw;
      min-width: 30vw;
      border-radius:14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      padding-top: 20px;
      padding-bottom: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      padding: 35px;
      margin: 5px;
    }

    .description-element {
      text-align: justify;
      color: #e9ebf3;
    }

    .sub-heading {
      text-decoration: underline;
      margin: 15px;
      color: black;
    }

    .list-item {
      color: #e9ebf3;
      text-align: start;
    }

    .contacts-container {
      position: relative;
      display: inline-block;
      padding: 25px 30px;
      margin: 40px 0;
      color: #03e9f4;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
      letter-spacing: 4px;
      overflow: hidden;
      margin-right: 50px;
      max-width: 20%;
      margin: 12px;
      padding-left: 4vw;
      margin-top: 12px;
      margin-bottom: 18px;
      background-color: transparent;
      padding: 12px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .contacts-container span {
      position: absolute;
      display: block;
    }

    .contacts-container span:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, black);
      animation: animate1 4s linear infinite;
    }

    @keyframes animate1 {
      0% {
        left: -100%;
      }
      50%, 100% {
        left: 100%;
      }
    }

    .contacts-container span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, black);
      animation: animate2 4s linear infinite;
      animation-delay: 1s;
    }

    @keyframes animate2 {
      0% {
        top: -100%;
      }
      50%, 100% {
        top: 100%;
      }
    }

    .contacts-container span:nth-child(3) {
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, black);
      animation: animate3 4s linear infinite;
      animation-delay: 2s;
    }

    @keyframes animate3 {
      0% {
        right: -100%;
      }
      50%, 100% {
        right: 100%;
      }
    }

    .contacts-container span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, black);
      animation: animate4 4s linear infinite;
      animation-delay: 3s;
    }

    @keyframes animate4 {
      0% {
        bottom: -100%;
      }
      50%, 100% {
        bottom: 100%;
      }
    }

    .contacts-header {
      font-weight: bold;
      text-decoration: underline;
      margin-bottom: 8px;
      text-align: start;
    }

    .contacts-list {
      list-style-type: none;
      display:flex
      margin-left: 27px;
      text-align: start;
    }

    .contacts-flex {
      display: flex;
      justify-content: center;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      color: #fff;
      background: linear-gradient(to right, #ff6b6b, #4ecdc4);
      transition: background 0.3s ease;
    }

    .button:hover {
      background: linear-gradient(to right, #ff4785, #3cba92);
    }
  }

  // mobile
  @media screen and (max-width: 767px) {
    .page-container {
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    .container {
      margin-top: 50px;
      margin-bottom: 30px;
      text-align: center;
    }

    .description-container,
    .rules-container {
      max-width: 90vw;
      display: flex;
      border-radius:10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5px;
      background-color: rgba(0, 0, 0, 0.6);
      padding-top: 20px;
      padding-bottom: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      padding: 35px;
    }

    .list-item {
      color: #e9ebf3;
      text-align: start;
    }

    .description-element {
      text-align: start;
      color: #e9ebf3;
    }

    .sub-heading {
      margin-bottom: 12px;
      text-decoration: underline;
      color: black;
    }

    .contacts-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      text-align: start;
      padding-left: 4vw;
      margin: 12px;
      background-color: transparent;
      padding: 12px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .contacts-header {
      font-weight: bold;
      text-decoration: underline;
      margin-bottom: 8px;
    }

    .contacts-list {
      list-style-type: none;
      margin-left: 27px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      color: #fff;
      background: linear-gradient(to right, #ff6b6b, #4ecdc4);
      transition: background 0.3s ease;
    }

    .button:hover {
      background: linear-gradient(to right, #ff4785, #3cba92);
    }
  }
`;

export default Wrapper;
