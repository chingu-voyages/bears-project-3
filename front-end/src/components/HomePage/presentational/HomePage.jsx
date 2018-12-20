import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Hero from './Hero'
import Callout from './Callout'
import EventWrapper from '../../Events/EventWrapper'
import EventDetail from '../../Events/EventDetail'
import EventCategoriesList from '../../Events/presentational/EventCategoriesList'

const HomePage = props => (
	<Fragment>
		<Hero
			heroTitle="Get your game on"
			heroContent="Browse or create events, and let the games begin!"
		/>

		<Route path="/find" render={props => <EventWrapper {...props} />} />
		<Route path="/event/:eventId" render={props => <EventDetail {...props} />} />
		<EventCategoriesList {...props} />
		<Callout
			title="Love tabletop gaming, but don't have a group to play with? Join or start a gaming event today!"
			description="Easily search thousands of events around your area."
			link="/find"
		/>
	</Fragment>
)

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(HomePage)
