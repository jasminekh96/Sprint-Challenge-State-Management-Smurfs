import React from 'react';

const Smurf = (props) => {
	return (
		<div>
			<h1>Name: {props.smurf.name}</h1>
			<h2>Age: {props.smurf.age}</h2>
			<p>Height: {props.smurf.height}</p>
		</div>
	);
};
export default Smurf;
