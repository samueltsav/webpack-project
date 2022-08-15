/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/reusables/Footer";
import Navbar from "../components/reusables/Navbar";

function Contact() {
	const [formData, setFormData] = React.useState(
		{
		name: "",
		email: "",
		phoneNumber: "",
		message: "",
		}
	);

	console.log(formData)

	function handleChange(event) {
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[event.target.name]: event.target.value,
			};
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		console.log(formData)
	}

	return (
		<>
			{<Navbar />}
			<section className="contact">
				<h2 className="heading_secondary">we're happy to hear from you</h2>

				<div className="row">
					<p className="long_copy">
						To request a quote or make enquiry about any of our services or
						products, kindly fill out the form below and hit the "send" button
						and we'll reply you within 24 hours. You may also reach us via our
						phone lines or any of our social media links provided at the foot of
						the page.
					</p>
				</div>
				<div className="row">
					<div className="contact">
						<form onSubmit={handleSubmit} className="contact_form">
							<div className="form_group">
								<input
									type="text"
									name="name"
									className="form_input"
									id="name"
									placeholder="Your full name"
									required
									onChange={handleChange}
									value={formData.name}
								/>
								<label htmlFor="name" className="form_label">
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
									onChange={handleChange}
									value={formData.email}
								/>
								<label htmlFor="email" className="form_label">
									Email address
								</label>
							</div>
							<div className="form_group">
								<input
									type="text"
									name="phoneNumber"
									className="form_input"
									id="contact"
									placeholder="Your phone number"
									required
									onChange={handleChange}
									value={formData.phoneNumber}
								/>
								<label htmlFor="PhoneNumbert" className="form_label">
									Phone number
								</label>
							</div>
							<div className="form_group">
								<textarea
									name="message"
									id="message"
									cols="23"
									rows="10"
									placeholder="Write your message here"
									className="form_input"
									required
									onChange={handleChange}
									value={formData.message}
								/>
								<label htmlFor="message" className="form_label">
									Message
								</label>
							</div>
							<div className="form_group">
								<div className="btn">
									<button className="btn_primary-2">Send!</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			{<Footer />}
		</>
	);
}

export default Contact;
