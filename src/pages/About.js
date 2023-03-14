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
			<div className="about">
			<h2>A propos</h2>
			<br />
			<h3>Surfrider Foundation Europe</h3>
			<p>
			<a href="https://surfrider.eu/" target="_blank" rel="noopener noreferrer">Surfrider.eu</a>
			</p>
			<img className="aboutLogo" src="./logo_blue.webp"></img>
			<br />
			<h3>Missions</h3>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quas
				rerum eos explicabo reiciendis similique neque ducimus esse minima
				fugiat dolores error modi, itaque necessitatibus ut sint adipisci autem
				reprehenderit!
			</p>
			<br />
			<h3>Hébergement</h3>
			<p>
				Netlify
			</p>
			<br />
			<h3>Développement</h3>
			<p>
				<a href="https://www.kevinbourgitteau.com" target="_blank" rel="noopener noreferrer">Kevin Bourgitteau</a>
			</p>
			</div>
			
		</div>
	);
};

export default About;
