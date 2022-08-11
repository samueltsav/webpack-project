/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./reusables/Navbar";

function Header() {
	return (
		<>
			<header className="header">
				{<Navbar />}
				<div className="header_box">
					<h1 className="heading_primary">
						<span className="heading_primary-main">FODISO</span>
						<span className="heading_primary-sub">School administrator</span>
					</h1>
					<Link to="/Contact" className="btn_link">
						<button className="btn_primary">
							Make Enquiry
						</button>
					</Link>
				</div>
			</header>
		</>
	);
}

export default Header;
