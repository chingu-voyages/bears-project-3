import React, { Component, Fragment } from 'react';
import Hero from './Hero';
import Header from './Header';
import Navigation from './Navigation';
import EventList from '../../Events/components/EventList';

const HomePage = () => (
	<Fragment>
		<Header>
			<Navigation>of some sort</Navigation>
		</Header>
		<Hero />
		<div className="event-list" style={{ marginTop: '1em' }}>
			<EventList style={{ marginTop: '2em' }} />
		</div>
	</Fragment>
);

export default HomePage;
