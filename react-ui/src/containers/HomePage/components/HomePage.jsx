import React, { Component, Fragment } from 'react';
import Hero from './Hero';
import EventList from '../../Events/components/EventList';

const HomePage = () => (
	<Fragment>
		<Hero
			heroTitle={'The Place to Find Your Game Buddies'}
			heroContent={'Browse or Create Events, and let the games begin!'}
		/>
		<EventList style={{ marginTop: '2em' }} />
	</Fragment>
);

export default HomePage;
