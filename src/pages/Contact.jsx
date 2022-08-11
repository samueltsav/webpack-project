import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/reusables/Footer';
import Navbar from '../components/reusables/Navbar';

function Contact() {
  return (
		<>
			{<Navbar />}
			<section className="contact">
				<h2 className="heading_secondary">we're happy to hear from you</h2>

				<div className="row">
					<p className="long_copy">
						To request a quote or make enquiry about any of our services or
						training programs, kindly fill out the form below and hit the "send"
						button and we'll reply you within 24 hours. You may also reach us
						via our phone lines or any of our social media links provided at the
						foot of the page.
					</p>
				</div>
				<div className="row">
					<div className="contact">
						<div className="contact_form">
							<form action="" method="POST" className="contact_form">
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
									<textarea
										name="message"
										id="message"
										cols="36"
										rows="10"
										placeholder="Write your message here"
										className="form_input"
										required
									></textarea>
									<label for="message" className="form_label">
										Message
									</label>
								</div>
								<div className="form_group">
									<div className="btn">
										<Link to="/" className="btn_link">
											<button className="btn_primary-2">
												Send!
											</button>
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{<Footer />}
		</>
	);
}

export default Contact