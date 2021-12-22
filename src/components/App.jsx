import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Test from './Test.jsx'
import latest from '../latest-card-value';

function App() {
	return (

		<Router>
			<div>

				<Route exact path="/" component={HomePage} />
				<Route path="/test" component={Test} />
			</div>
		</Router>
	);

}

export default App;


