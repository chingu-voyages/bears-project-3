import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';
import Callout from './Callout';
import EventList from '../../Events/EventList';
import EventCategoriesList from '../../Events/presentational/EventCategoriesList';

const HomePage = () => (
  <Fragment>
    <Hero
      heroTitle="Get your game on"
      heroContent="Browse or create events, and let the games begin!"
    />
    <EventList style={{ marginTop: '2em' }} />
    <EventCategoriesList />
    <Callout
      title="Love tabletop gaming, but don't have a group to play with? Join or start a gaming event today!"
      description="Easily search thousands of events around your area."
      link="/events"
    />
  </Fragment>
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomePage);
