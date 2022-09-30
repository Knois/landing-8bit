import React from "react";

const App = () => {
  return (
    <>
      <div className="header">
        <div className="header__text">RISING FROM THE ASHES</div>
      </div>
      <a
        className="room"
        href="https://oncyber.io/explore"
        target="_blank"
        rel="noreferrer"
      >
        <div className="room__text">PLEASANT</div>
        <div className="room__text">VOID</div>
        <div className="room__text">ENTRY</div>
      </a>
      <div className="scroll">
        <div className="scroll__chapter">CHAPTER ALPHA</div>
        <div className="scroll__box">
          <div className="scroll__box__string">
            <a
              className="scroll__text"
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
            >
              PET THE VOID
            </a>
            <a
              className="scroll__icon_one"
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
            </a>
          </div>
          <div className="scroll__box__string">
            <a
              className="scroll__text"
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
            >
              FIND NEW CANVAS
            </a>
            <a
              className="scroll__icon_two"
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
