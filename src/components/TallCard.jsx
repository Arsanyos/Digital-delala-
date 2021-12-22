import React from "react";
function TallCard(props) {
  return (
    <div>
      <div className="tall-card">
        <h2>Addis Ababa</h2>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

export default TallCard;
