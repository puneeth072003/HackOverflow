import React from "react";
import logo from "../../assets/logo.png";
import "./page.css";

const Final = () => {
  return (
    <div className="tras-final">
      <center>
        <img src={logo} className="tras-logo" alt="logo"></img>
        <h1 className="tras-summary-heading">Summary of the meeting</h1>
        <br />
        <p className="tras-summary">{window.summary}</p>
        <br />
        <br />
        <p className="tras-time">
          Amount of time taken to transcribe : {window.executionTime}
        </p>
      </center>
    </div>
  );
};

export default Final;
