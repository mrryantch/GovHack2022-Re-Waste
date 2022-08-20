import React from "react";
import StationMap from "./StationMap/StationMap";

const Header = () => {
  return (
    <>
      <div>re:waste</div>
      <a href="#">Link1</a>
      <a href="#">Link2</a>
      <a href="#">Link3</a>
      <a href="#">Link4</a>

      <button>CTA</button>
    </>
  );
};

const LandingPage = () => {
  return (
    <>
      <Header />
      <h1>This is a landing page</h1>
    </>
  );
};

export default LandingPage;
