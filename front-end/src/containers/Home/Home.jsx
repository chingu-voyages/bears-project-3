import React, { Fragment } from 'react';

import Hero from './presentational/Hero'
import Callout from './presentational/Callout'

const Home = () => (
  <Fragment>
    <Hero
      heroTitle="Get your game on"
      heroContent="Browse or host events, and let the games begin!"
    />
    <Callout
      title="Love tabletop gaming? Join or host an event today!"
      description="Search hundreds of events around your area."
      link="/events"
    />
  </Fragment>
)

export default Home;
