import React from "react";

export function SimpleCounter(props) {
	return (
		<div className="BigCounter">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.DigitFour}</div>
			<div className="three">{props.DigitThree}</div>
			<div className="two">{props.DigitTwo}</div>
			<div className="one">{props.DigitOne}</div>
		</div>
	);
}
