/** @format */

import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import Navbar from "./Navbar";

function Header() {
	return (
		<>
			<header className="header">
				{<Navbar />}
				<div className="text_box">
					<h1 className="heading_primary">
						<span className="heading_primary-main">
							FODISO
						</span>
						<span className="heading_primary-sub">
							School administrator
						</span>
					</h1>
					{<ButtonPrimary btn_name="Make Enquiry" />}
				</div>
			</header>
		</>
	);
}

export default Header;
