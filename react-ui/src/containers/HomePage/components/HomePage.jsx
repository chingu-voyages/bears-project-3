import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';
import EventList from '../../Events/components/EventList';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Hero
          heroTitle="The Place to Find Your Game Buddies"
          heroContent="Browse or Create Events, and let the games begin!"
        />
        <EventList style={{ marginTop: '2em' }} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomePage);
