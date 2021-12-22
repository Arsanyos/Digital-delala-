import React from "react";

function SmallCard(props) {
  return (
    <div className="short-info-card">
      <div className="short-card">
        <h2>Addis Ababa</h2>
        <h3>{props.name}</h3>
      </div>
      <br />
      <div className="short-card">
        <h2>Addis Ababa</h2>
         <h3>{props.Lname}</h3>
      </div>
    </div>
  );
}
export default SmallCard;
