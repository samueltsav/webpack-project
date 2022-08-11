/** @format */

import React from "react";
import TextBox from "./reusables/Textbox";
import { Link } from "react-router-dom";


function Products() {
	return (
		<>
			<section className="products">
				<div className="row">
					<h2 className="heading_secondary">
						our products are tailored just for you
					</h2>

					<div className="col-1-of-3">
						<TextBox
							heading="compute-based testing"
							paragraph="Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula
								arcu nam."
						></TextBox>
						<Link to="/SignUp" className="btn_link">
							<button className="btn_primary-2">
								Sign up
							</button>
						</Link>
					</div>

					<div className="col-1-of-3">
						<TextBox
							heading="school fees management"
							paragraph="Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis."
						></TextBox>
						<Link to="/SignUp" className="btn_link">
							<button className="btn_primary-2">
								Sign up
							</button>
						</Link>
					</div>
					<div className="col-1-of-3">
						<TextBox
							heading="e-learning"
							paragraph="Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula
								arcu nam. Laoreet sollicitudin erat. Metus. Platea faucibus
								integer facilisis, odio suspendisse metus et suscipit class
								malesuada taciti torquent dictum."
						></TextBox>
						<Link to="/SignUp" className="btn_link">
							<button className="btn_primary-2">
								Sign up
							</button>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default Products;
