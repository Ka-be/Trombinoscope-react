import React from "react";

const Card = ({ volunteer }) => {


	return (
		<li className="card">
			<img src={volunteer.avatar} alt={"Photo de " + volunteer.name} />
			<div className="infos">
				<h2>{volunteer.name}</h2>
				<p>{volunteer.function}</p>
			</div>
		</li>
	);
};





export default Card;
