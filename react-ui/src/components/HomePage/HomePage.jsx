import React, { Fragment } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD:react-ui/src/components/HomePage/HomePage.jsx

import Hero from './presentational/Hero';
import Callout from './presentational/Callout';
import EventList from '../Events/EventList';
import EventCategoriesList from '../Events/presentational/EventCategoriesList';
=======
import { Route } from 'react-router-dom';
import Hero from './Hero';
import Callout from './Callout';
import EventList from '../../Events/EventList';
import EventCategoriesList from '../../Events/presentational/EventCategoriesList';
>>>>>>> e2d6b8c5ddc6ba300443e7dbc5be6a6f36c85ac7:react-ui/src/components/HomePage/presentational/HomePage.jsx

const HomePage = () => (
	<Fragment>
		<Hero
			heroTitle="Get your game on"
			heroContent="Browse or create events, and let the games begin!"
		/>

		<Route path="/find" component={EventList} />

		<EventCategoriesList />
		<Callout
			title="Love tabletop gaming, but don't have a group to play with? Join or start a gaming event today!"
			description="Easily search thousands of events around your area."
			link="/find"
		/>
	</Fragment>
);

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(HomePage);
