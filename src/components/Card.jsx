import React from "react";
import Test from './Test.jsx';
import "../style/style-card.css";



function Card(props) {
  return (
    <div className="card">
      {/* card-top */}
      <div className="card-top">
        
        <div className="card-heading">
          <p className="heading">{props.type}</p>
          <p className="price">{props.price} birr</p>
        </div>
        <div class="card-img">
          <img src={props.img} alt="villa" height="160px" width="100%" />
        </div>
      </div>
      {/* card-bottom */}
      <div className="card-bottom">
        <div className="sub-top-container">
          <div class="item bed">
            <img
              className="icon bed"
              alt="bed-icon"
              src="https://img.icons8.com/fluent-systems-filled/24/000000/bed.png"
            />
            <label>{props.bed}</label>
          </div>

          <div class="item bath">
            <img
              class="icon bath"
              alt="bath-icon"
              src="https://img.icons8.com/material-sharp/24/000000/bath.png"
            />
            <label>{props.bath}</label>
          </div>

          <div class="item kare">
            <img
              class="icon kare"
              alt="land-size-icon"
              src="https://img.icons8.com/material-sharp/24/000000/cottage.png"
            />
            <label>{props.size} kare</label>
          </div>
        </div>

        <div class="sub-bottom-container">
          <div class="location">
            <img src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png" />
          </div>
          <div className="card-subheading">
            <p className="subHeading">Addis Ababa<br/> {props.location}</p>
          </div>
         
          <div className="button info">
           <a className="btn" href="">
              Contact
            </a> 
          </div>
         
        </div>
      </div>
    </div>
   
  );
}

export default Card;
