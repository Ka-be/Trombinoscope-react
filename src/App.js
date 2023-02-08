import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
	return (
    // Creation du routage des pages
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/*" element={<Home></Home>}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
