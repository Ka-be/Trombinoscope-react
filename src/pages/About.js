import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const About = () => {
	return (
		<div>
			<div className="hero">
				<Header></Header>
				<Navigation></Navigation>
			</div>
			<h1>A propos</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quas
				rerum eos explicabo reiciendis similique neque ducimus esse minima
				fugiat dolores error modi, itaque necessitatibus ut sint adipisci autem
				reprehenderit!
			</p>
		</div>
	);
};

export default About;
