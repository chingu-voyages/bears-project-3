import React, { Component, Fragment } from 'react';
import Hero from './Hero';

import EventList from '../../Events/components/EventList';

const HomePage = () => (
	<Fragment>
		<Hero
			heroTitle={'The Place to Find Your Game Buddies'}
			heroContent={'Browse or Create Events, and get the game on!'}
		/>
		<div className="event-list" style={{ marginTop: '1em' }}>
			<EventList style={{ marginTop: '2em' }} />
		</div>
	</Fragment>
);

export default HomePage;
