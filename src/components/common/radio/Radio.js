import React from 'react';
import './Radio.css';

const Radio = ({ name, number }) => {
	const onChange = (event) => {
		console.log(event);
	}
	return (
		<div className="radio">
			<input type="radio" name={name} onChange={onChange} id={`radio${number}`}/>
			<label htmlFor={`radio${number}`}><i/></label>
		</div>
	);
};

export default Radio;
