//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

export function SimpleCounter(props) {
	return (
		<div className="BigCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.DigitFour % 10}</div>
			<div className="three">{props.DigitThree % 10}</div>
			<div className="two">{props.DigitTwo % 10}</div>
			<div className="one">{props.DigitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	DigitFour: propTypes.number,
	DigitThree: propTypes.number,
	DigitTwo: propTypes.number,
	DigitOne: propTypes.number
};

let counter = 0;

setInterval(function() {
	//render your react application
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			DigitOne={one}
			DigitTwo={two}
			DigitThree={three}
			DigitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
