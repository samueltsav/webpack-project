import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
		<>
			<footer className="footer">
				<div className="row">
					<small className="col-1-of-3">
						<h2 className="footer_heading">
							<em>quick links</em>
						</h2>
						<ul>
							<Link to="/" className="footer_link">
								<li>subscribe to our news letter</li>
							</Link>
							<Link to="/" className="footer_link">
								<li>company profile</li>
							</Link>
							<Link to="/" className="footer_link">
								<li>resources</li>
							</Link>
							<Link to="/Contact" className="footer_link">
								<li>contact us</li>
							</Link>
						</ul>
					</small>
					<small className="col-1-of-3">
						<h2 className="footer_heading">
							<em>social media links</em>
						</h2>
						<ul className="footer_social-links">
							<Link to="/" className="footer_link">
								<li>twitter</li>
							</Link>
							<Link to="/" className="footer_link">
								<li>facebook</li>
							</Link>
							<Link to="/" className="footer_link">
								<li>instagram</li>
							</Link>
						</ul>
					</small>
					<div className="col-1-of-3">
						<small className="footer_contact">
							<h2 className="footer_heading">
								<em>contacts</em>
							</h2>
							<p>
								2nd Avenue, Off Iorzua Ayatse Street, Logo I, Makurdi, Benue
								State
							</p>
							<p>09098406763</p>
							<p>08160943669</p>
							<p>08098406763</p>
						</small>
					</div>
				</div>
				<small>
					<p className="copyright">&copy; FODISO 2022. All rights reserved.</p>
				</small>
			</footer>
		</>
	);
}

export default Footer