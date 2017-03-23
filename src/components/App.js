import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Intro from './intro/Intro';
import SignUp from './sign-up/SignUp';
import Test from './test/Test';

class App extends Component {
	render = () => (
		<div className="app">
			<Switch>
				<Route exact path="/" component={Intro}/>
				<Route exact path="/sign-up" component={SignUp}/>
				<Route exact path="/test/question_:questionNum" component={Test}/>
			</Switch>
		</div>
	)
}

export default App;
