import React, { useState, useEffect } from "react";
import "./style.css"; // Assuming your CSS file is named style.css

const CLOCK = () => {
  const [countdown, setCountdown] = useState(
    new Date("Mar 02, 2024 00:00:00").getTime()
  );
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown(0);
      }

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="container">
      <div className="content">
        <h1>
          Registration <span>ends</span> in
        </h1>
        <div className="launch-time">
          <div>
            <p id="Days">{String(days).padStart(2, "0")}:</p>
            <span>days</span>
          </div>
          <div>
            <p id="Hours">{String(hours).padStart(2, "0")}:</p>
            <span>Hours</span>
          </div>
          <div>
            <p id="Minutes">{String(minutes).padStart(2, "0")}:</p>
            <span>Minutes</span>
          </div>
          <div>
            <p id="Seconds">{String(seconds).padStart(2, "0")}</p>
            <span>Seconds</span>
          </div>
        </div>
        <a class="bn49" href="/">REGISTER</a>
      </div>
      <div className="image">  
        <img src="/images/down-arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default CLOCK;
