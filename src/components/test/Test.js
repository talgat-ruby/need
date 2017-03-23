import React from 'react';
import './Test.css';

import { locale } from '../../utils';
import { BUTTON_STYLES } from '../../environment/app_environment';

import Question from './question/Question';
import Button from '../common/button/Button';

const Test = (props) => {
	return (
		<section className="test">
			<h3>Question 3</h3>
			<div className="questions">
				<Question number={1}>
					<span>Hello1</span>
				</Question>
				<Question number={2}>
					<span>Hello2</span>
				</Question>
				<Question number={3}>
					<span>Hello3</span>
				</Question>
				<Question number={4}>
					<span>Hello4</span>
				</Question>
			</div>
			<Button
				name={locale('buttons.submit')}
				style={BUTTON_STYLES.RED}/>
		</section>
	);
};

export default Test;
