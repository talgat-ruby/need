import React, { PropTypes } from 'react';
import $class from 'classnames';
import './Button.css';

import { BUTTON_STYLES } from '../../../environment/app_environment';

const Button = ({ name, clickCallback, round, style, type='button' }) => {
	return (
		<button
			className={$class('button', [style], { round })}
			type={type}
			onClick={clickCallback}>
			{name}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string.isRequired,
	clickCallback: PropTypes.func.isRequired,
	round: PropTypes.bool,
	style: PropTypes.oneOf(Object.values(BUTTON_STYLES)).isRequired,
	type: PropTypes.oneOf(['submit', 'reset', 'menu', 'button'])
}

export default Button;
