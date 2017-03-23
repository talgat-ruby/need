import React, { Component, PropTypes } from 'react';
import './SignUp.css';

import { locale } from '../../utils';
import { BUTTON_STYLES } from '../../environment/app_environment';

import VK from '../common/svg/vk/VK';
import Facebook from '../common/svg/facebook/Facebook';
import Input from '../common/input/Input';
import Button from '../common/button/Button';

class SignUp extends Component {
	state = {
		user: '',
		location: '',
		email: '',
		tel: ''
	}

	vkClick = () => {
		console.log('VK clicked');
	}

	facebookClick = () => {
		console.log('FACEBOOK clicked');
	}

	inputHandler = ({ target: { value, dataset } }) => {
		this.setState({
			[dataset.key]: value
		});
	}

	signup = () => {
		console.log('SIGN UP');
	}

	onSubmit = event => {
		event.preventDefault();
		console.log(this.state);
	}

	render = () => (
		<section className="sign-up">
			<h2>{locale('text.registration')}</h2>
			<div className="social_network-container">
				<span>{locale('text.sn_sign_up')}</span>
				<div className="logos">
					<VK clickCallback={this.vkClick}/>
					<Facebook clickCallback={this.facebookClick}/>
				</div>
			</div>
			<form onSubmit={this.onSubmit}>
				<Input
					value={this.state.user}
					dataKey="user"
					placeholder={locale('placeholder.name')}
					onChange={this.inputHandler}/>
				<Input
					value={this.state.location}
					dataKey="location"
					placeholder={locale('placeholder.location')}
					onChange={this.inputHandler}/>
				<Input
					value={this.state.email}
					dataKey="email"
					type="email"
					placeholder={locale('placeholder.email')}
					onChange={this.inputHandler}/>
				<Input
					value={this.state.tel}
					dataKey="tel"
					type="tel"
					placeholder={locale('placeholder.tel')}
					onChange={this.inputHandler}/>
				<Button
					name={locale('buttons.log_in')}
					style={BUTTON_STYLES.RED}
					type="submit"
					clickCallback={this.signup}/>
			</form>
		</section>
	)
}

export default SignUp;
