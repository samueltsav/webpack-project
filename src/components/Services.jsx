/** @format */

import React from "react";
import cbt from "../images/cbt.png";
import student from "../images/student_studying.jpg";
import school from "../images/school.jpg";
import attendance from "../images/attendance_register.png";
import clock from "../images/clock.jpg";

function Services() {
	return (
		<>
			<section className="services">
				<div className="row">
					<h2 className="heading_secondary">our services are tailored for your needs</h2>
					<div className="col-1-of-2">
						<img src={cbt} alt="cbt" className="services_photo" />
					</div>
					<div className="col-1-of-2">
						<p className="services_paragraph">
							nam. Laoreet sollicitudin erat. Metus. Platea faucibus integer
							facilisis, odio suspendisse metus et suscipit class malesuada
							taciti torquent dictum.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-2">
						<img
							src={student}
							alt="student_studying"
							className="services_photo"
						/>
					</div>
					<div className="col-1-of-2">
						<p className="services_paragraph">
							Lobortis, consectetuer integer felis ridiculus nisl porttitor
							bibendum placerat fringilla duis quisque conubia ad. Conubia at.
							Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula arcu
							nam.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-2">
						<img
							src={school}
							alt="school_building"
							className="services_photo"
						/>
					</div>
					<div className="col-1-of-2">
						<p className="services_paragraph">
							Lobortis, consectetuer integer felis ridiculus nisl porttitor
							bibendum placerat fringilla duis quisque conubia ad. Conubia at.
							Tempor. Dolor rutrum odio sit nullam convallis
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-2">
						<img
							src={attendance}
							alt="attendance_register"
							className="services_photo"
						/>
					</div>
					<div className="col-1-of-2">
						<p className="services_paragraph">
							Lobortis, consectetuer integer felis ridiculus nisl porttitor
							bibendum placerat fringilla duis quisque conubia ad. Conubia at.
							Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula arcu
							nam. Laoreet sollicitudin erat. Metus. Platea faucibus integer
							facilisis, odio suspendisse metus et suscipit class malesuada
							taciti torquent dictum.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-1-of-2">
						<img src={clock} alt="clock" className="services_photo" />
					</div>
					<div className="col-1-of-2">
						<p className="services_paragraph">
							Tempor. Dolor rutrum odio sit nullam convallis. Urna vehicula arcu
							nam. Laoreet sollicitudin erat. Metus. Platea faucibus integer
							facilisis, odio suspendisse metus et suscipit class malesuada
							taciti torquent dictum.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Services;
