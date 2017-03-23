import React, { PropTypes } from 'react';
import './Facebook.css';

const Facebook = ({ clickCallback }) => {
	return (
		<svg version="1.1" id="facebook_logo" xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" xmlSpace="preserve"
			onClick={clickCallback}>
			<rect x="0" y="0" width="512" height="512"/>
			<path d="M432.552,88.276v88.276h-79.448c-9.71,0-17.655,7.945-17.655,17.655v52.966h88.276v88.276h-88.276
				V512h-88.276V335.448h-70.621v-88.276h70.621v-52.966c0-55.614,42.372-101.517,97.103-105.931H432.552z"/>
		</svg>
	);
};

Facebook.propTypes = {
	clickCallback: PropTypes.func
};

export default Facebook;
