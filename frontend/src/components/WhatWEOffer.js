import React from "react";

const WhatWEOffer = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>What we offer?</h1>
      <div className="blur-flex">
        <div className="img-1">
          <div className="blur">
            <span>Customised curriculum</span>
            <span className="offer-text">
              Customised sessions and module for Basic, Intermediate and
              Advanced learners.
            </span>
          </div>
        </div>
        <div className="img-2">
          <div className="blur">
            <span>Experimental Learning </span>
            <span className="offer-text">
              Do not study English, rather consume and use it.
            </span>
          </div>
        </div>
        <div className="img-3">
          <div className="blur">
            <span>Shadowing Method</span>
            <span className="offer-text">
              Think and speak in English rather than translating it from mother
              tongue.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWEOffer;
