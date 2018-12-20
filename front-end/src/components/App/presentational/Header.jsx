import React from 'react';
import Navigation from './Navigation';

export default function Header({ logo, auth }) {
	// Pass auth prop to navigation
	return <Navigation logo={logo} auth={auth} />;
}
