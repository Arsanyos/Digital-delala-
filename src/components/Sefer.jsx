import React from "react";
import SmallCard from "./SmallCard.jsx";
import TallCard from "./TallCard.jsx";
import "../style/style-sefer.css";

function Sefer() {
  return (
    <div className="sefer-display-card">
      <TallCard name="Mexico" />
      <SmallCard name="bole" Lname="summit" />
      <TallCard name="4kilo" Lname="piassa" />
      <TallCard name="Kotebe"/>
    </div>
  );
}

export default Sefer;

