import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';
import Callout from './Callout';
import EventList from '../../Events/components/EventList';

class HomePage extends Component {
	render() {
		return (
			<Fragment>
				<Hero
					heroTitle="The Place to Find Your Board Gaming Buddies"
					heroContent="Browse or Create Events, and let the games begin!"
				/>
				<EventList style={{ marginTop: '2em' }} />
				<Callout
					title="Bored? Wanna Play? Join a gaming event today!"
					description="Easily search 1000's of events around your area."
					link="/events"
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomePage);
