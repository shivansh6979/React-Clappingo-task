import React from "react";
import Banner from "./components/Banner";
import Show from "./components/Download";
import Introduction from "./components/Introduction";
import WhatWEOffer from "./components/WhatWEOffer";

const Homescreen = () => {
  return (
    <div>
      {" "}
      <Introduction />
      <Banner />
      <WhatWEOffer />
      <Show />
    </div>
  );
};

export default Homescreen;
