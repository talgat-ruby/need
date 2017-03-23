import React from 'react';
import './Intro.css';

import { locale } from '../../utils';
import { BUTTON_STYLES } from '../../environment/app_environment';
import border from '../../media/images/border_init.png';
import logo from '../../media/images/logo.png';

import Button from '../common/button/Button';

const Intro = () => {
	const passTest = () => {
		console.log('PASS TEST');
	};

	return (
		<section className="intro">
			<div>
				<img src={logo} alt="Logo" className="logo"/>
				<h1>{locale('text.find_yourself')}</h1>
				<h2>{locale('text.with_maccoffee')}</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<Button
					name={locale('buttons.pass_test')}
					clickCallback={passTest}
					style={BUTTON_STYLES.RED}/>
			</div>
			<img src={border} alt="border" className="border"/>
		</section>
	);
};

export default Intro;
