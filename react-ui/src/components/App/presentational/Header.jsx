import React from 'react';
import Navigation from './Navigation';

export default function Header({ logo, auth }) {
	return <Navigation logo={logo} auth={auth} />;
}
