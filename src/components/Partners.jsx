/** @format */

import React from "react";
import mtn from "../images/mtn_logo.png";
import etisalat from "../images/9mobile_logo.png";
import glo from "../images/glo_logo.jpg";
import interswitch from "../images/interswitch_logo.png";

function Partners() {
	return (
		<>
            <section className="section partners">
                <h2 className="heading_secondary">
                    our global partners
                </h2>
				<div className="row">
					<div className="col-1-of-4">
						<img src={mtn} alt="" className="partners_logo" />
					</div>

					<div className="col-1-of-4">
						<img src={etisalat} alt="" className="partners_logo" />
					</div>

					<div className="col-1-of-4">
						<img src={glo} alt="" className="partners_logo" />
					</div>

					<div className="col-1-of-4">
						<img src={interswitch} alt="" className="partners_logo" />
					</div>
				</div>
			</section>
		</>
	);
}

export default Partners;
