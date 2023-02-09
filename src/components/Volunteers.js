import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Volunteers = () => {
	const [data, setData] = useState([]);

	// Import des données avec useEffect (c'est un hook) et axios (Se joue quand le composant est monté)
	useEffect(() => {
		axios.get("volunteers.json").then((res) => setData(res.data));
	}, []);

	return (
		<div className="volunteers">
			<ul className="volunteers-cards">
				{data.map((volunteer) => (
					<Card key={volunteer.id} volunteer={volunteer} />
				))}
			</ul>
		</div>
	);
};

export default Volunteers;
