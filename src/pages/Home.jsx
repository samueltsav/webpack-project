/** @format */

import React from "react";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Products from "../components/Products";
import Footer from "../components/reusables/Footer";
import Services from "../components/Services";

function Home() {
	return (
		<>
			<div>
				{<Header />}
				{<Products />}
				{<Services />}
				{<Partners />}
				{<Footer />}
			</div>
		</>
	);
}

export default Home;
