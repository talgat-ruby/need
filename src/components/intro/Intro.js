import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import './Intro.css';

import { locale } from '../../utils';
import { BUTTON_STYLES } from '../../environment/app_environment';
import border from '../../media/images/border_init.png';
import logo from '../../media/images/logo.png';
import bracelet from '../../media/images/bracelet.png';
import psp from '../../media/images/psp.png';
import set from '../../media/images/set.png';

import Button from '../common/button/Button';

const Intro = () => {
	const passTest = () => {
		console.log('PASS TEST');
	};

	const participate = () => {
		console.log('PARTICIPATE');
	};

	return (
			<Parallax bgImage={border} strength={400} className="intro">
				<div className="intro-container">
					<nav>
						<Link to="/rules">{locale('text.rules')}</Link>
						<img src={logo} alt="Logo" className="logo"/>
						<Link to="/cabinet">{locale('text.cabinet')}</Link>					
					</nav>
					<h1>{locale('text.find_yourself')}</h1>
					<h2>{locale('text.with_maccoffee')}</h2>
					<p className="text text1">{locale('text.intro_1')}</p>
					<p className="text text2">{locale('text.intro_2')}</p>
					<Button
						name={locale('buttons.pass_test')}
						clickCallback={passTest}
						style={BUTTON_STYLES.RED}/>
					<p className="text text3">{locale('text.intro_3')}</p>
					<h1>1000</h1>
					<p className="text text4">{locale('text.intro_4')}</p>
					<section className="gifts">
						<article>
							<div className="image-container">
								<img src={bracelet} alt="bracelet"/>
							</div>
							<span>{locale('text.bracelet')}</span>
						</article>
						<article>
							<div className="image-container">
								<img src={psp} alt="psp"/>
							</div>
							<span>{locale('text.psp')}</span>
						</article>
						<article>
							<div className="image-container">
								<img src={set} alt="set"/>
							</div>
							<span>{locale('text.set')}</span>
						</article>
					</section>
					<Button 
						name={locale('buttons.participate')}
						clickCallback={participate}
						style={BUTTON_STYLES.RED}/>
				</div>
			</Parallax>
	);
};

// <img src={border} alt="border" className="border"/>

export default Intro;
