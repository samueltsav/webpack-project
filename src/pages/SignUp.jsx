/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/reusables/Footer";
import Navbar from "../components/reusables/Navbar";

function SignUp() {
	return (
		<>
			{<Navbar />}
			<section classNameName="signUp">
				<div classNameName="row">
					<h2 className="heading_secondary">
						sign up and enjoy our topnotch services!
					</h2>
					<p className="long_copy">
						To sign up for any of our services, please kindly fill the form
						below and select your preferred Package. Submit the form and we will
						contact you on the next steps
					</p>
					<form action="" method="POST" className="signUp_form">
						<div className="form_group">
							<input
								type="text"
								name="name"
								className="form_input"
								id="name"
								placeholder="Your full name"
								required
							/>
							<label for="name" className="form_label">
								Name
							</label>
						</div>
						<div className="form_group">
							<input
								type="email"
								name="email"
								className="form_input"
								id="email"
								placeholder="Your email address"
								required
							/>
							<label for="email" className="form_label">
								Email address
							</label>
						</div>
						<div className="form_group">
							<input
								type="text"
								name="contact"
								className="form_input"
								id="contact"
								placeholder="Your phone number"
								required
							/>
							<label for="contact" className="form_label">
								Phone number
							</label>
						</div>
						<div className="form_group">
							<select name="program" className="form_input" id="program">
								<option value="select">Select your Package</option>
								<option value="basic">Basic</option>
								<option value="advanced">Advanced</option>
								<option value="premium">Premium</option>
							</select>
						</div>
						<div className="form_group">
							<div className="btn">
								<Link to="/" className="btn_link">
									<button className="btn_primary-2">
										Submit
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</section>
			{<Footer />}
		</>
	);
}

export default SignUp;
