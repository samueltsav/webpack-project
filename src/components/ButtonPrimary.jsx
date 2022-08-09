import React from 'react';
import { Link } from "react-router-dom";

function ButtonPrimary(props) {
  return (
		<>
			<div className="btn">
				<Link to="Contact" className="btn_link">
					<button className="btn_primary">{props.btn_name}</button>
				</Link>
			</div>
		</>
	);
}

export default ButtonPrimary