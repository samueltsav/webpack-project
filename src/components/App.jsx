/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "../styles/index.scss";
import Recipes from "./Recipes";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import SignUP from "../pages/SignUp";

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="SignUp" element={<SignUP />} />
						<Route path="Contact" element={<Contact />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
