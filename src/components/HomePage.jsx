import React from 'react';
import Nav from './Nav.jsx';
import Heading from './Heading.jsx';
import Card from './Card.jsx';
import Sefer from './Sefer.jsx';
import house from '../house-card-value';
import latest from '../latest-card-value';
import "../style/style-app.css";

import {Link} from 'react-router-dom';
function HomePage(){
	return(
		<div className="app">

		  <div className="nav-app">
		    <Nav />
		  </div>

		    <div className="heading">
		      <Heading heading="Latest"/>
		    </div>


           <Link style={{textDecoration:"none"}} to='/Test'>
		    <div className="card-app">
		    {latest.map((x) => (
          <Card img={x.img} price={x.price}  location={x.location} bed={x.bed} bath={x.bath} size={x.size} />
        ))}
		    </div>
		  </Link>

		     <div className="heading">
		      <Heading heading="Don't miss out on these houses"/>
		    </div>

		    <div className="card-app">
		   {house.map((x) => (
          <Card img={x.img} price={x.price} location={x.location} bed={x.bed} bath={x.bath} size={x.size} />
        ))}
		    </div>

		    <div className="heading" id="sefer-heading">
		      <Heading heading="Explore neighborhoods on Digital Delala"/>
		    </div>
		    <div className="sefer-display">
        <Sefer />
      </div>

		</div>);
}

export default HomePage;

 