import React, { PropTypes } from 'react';
import $class from 'classnames';
import './Input.css';

const Input = ({ type='text', onChange, value, error, dataKey, placeholder }) => {
	return (
		<input
			className={$class('input', { error })}
			type={type}
			value={value}
			placeholder={placeholder}
			data-key={dataKey}
			onChange={onChange}/>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string.isRequired,
	dataKey: PropTypes.string.isRequired,
	error: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Input;
