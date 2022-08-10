/** @format */

import React from "react";

function ButtonSecondary(props) {
	return (
		<>
			<div className="btn">
				<button className="btn_secondary btn_secondary-products">{props.btn_name}</button>
			</div>
		</>
	);
}

export default ButtonSecondary;
