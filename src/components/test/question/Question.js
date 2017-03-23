import React from 'react';
import './Question.css';

import Radio from '../../common/radio/Radio';

const Question = ({ children, number }) => {
	return (
		<div className="question">
			<article>{ children }</article>
			<Radio name="question" number={number}/>
		</div>
	);
};

export default Question;
