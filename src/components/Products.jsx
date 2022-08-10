/** @format */

import React from "react";
import TextBox from "./reusables/Textbox";
import { Link } from "react-router-dom";
import ButtonSecondary from "./reusables/ButtonSecondary";

function Products() {
	return (
		<>
			<section className="products">
				<div className="row">
					<em>
						<h2 className="heading_secondary">
							our products are tailored just for you
						</h2>
					</em>
					<div className="col-1-of-3">
						<TextBox
							heading="compute-based testing"
							paragraph="Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula
								arcu nam. Laoreet sollicitudin erat. Metus. Platea faucibus
								integer facilisis, odio suspendisse metus et suscipit class
								malesuada taciti torquent dictum. Mollis quis consequat sociis
								aliquam elit integer tellus consequat curabitur dictum feugiat.
								Nostra mauris penatibus non dolor aptent mauris. Est. Gravida
								augue. Dictum non purus montes tristique auctor consequat sapien
								est ultricies vivamus neque sociis ultrices bibendum. Eu egestas
								lacus, luctus morbi Metus a ullamcorper. Turpis suspendisse
								libero scelerisque risus iaculis velit pharetra nisl"
						></TextBox>
						<Link to="/" className="btn_link">
							{<ButtonSecondary btn_name="Sign Up" />}
						</Link>
					</div>
					<div className="col-1-of-3">
						<TextBox
							heading="school fees management"
							paragraph="Lobortis, consectetuer integer felis ridiculus nisl porttitor
								bibendum placerat fringilla duis quisque conubia ad. Conubia at.
								Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula
								arcu nam. Laoreet sollicitudin erat. Metus. Platea faucibus
								integer facilisis, odio suspendisse metus et suscipit class
								malesuada taciti torquent dictum. Mollis quis consequat sociis
								aliquam elit integer tellus consequat curabitur dictum feugiat.
								Nostra mauris penatibus non dolor aptent mauris. Est. Gravida
								augue. Dictum non purus montes tristique auctor consequat sapien
								est ultricies vivamus neque sociis ultrices bibendum. Eu egestas
								lacus, luctus morbi Metus a ullamcorper. Turpis suspendisse
								libero scelerisque risus iaculis velit pharetra nisl"
						></TextBox>
						<Link to="/" className="btn_link">
							{<ButtonSecondary btn_name="Sign Up" />}
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
								malesuada taciti torquent dictum. Mollis quis consequat sociis
								aliquam elit integer tellus consequat curabitur dictum feugiat.
								Nostra mauris penatibus non dolor aptent mauris. Est. Gravida
								augue. Dictum non purus montes tristique auctor consequat sapien
								est ultricies vivamus neque sociis ultrices bibendum. Eu egestas
								lacus, luctus morbi Metus a ullamcorper. Turpis suspendisse
								libero scelerisque risus iaculis velit pharetra nisl"
						></TextBox>
						<Link to="/" className="btn_link">
							{<ButtonSecondary btn_name="Sign Up" />}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default Products;
