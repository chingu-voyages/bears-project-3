import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';

const Hero = ({ mobile, heroTitle, heroContent }) => (
  <Segment
    basic
    textAlign="center"
    style={{
      backgroundColor: '#80DED9',
      minHeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2em 0'
    }}
    vertical
  >
    <Container text className="hero homepage-hero">
      <Header
        as="h1"
        content={heroTitle}
        style={{
          fontFamily: 'Bungee',
          color: '#53599A',
          fontSize: mobile ? '2em' : '3em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : ''
        }}
      />
      <Header
        inverted
        as="h2"
        content={heroContent}
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em'
        }}
      />
      <Button size="huge" color="purple" animated>
        <Button.Content visible>Get Started</Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button>
    </Container>
  </Segment>
);

Hero.propTypes = {
  mobile: PropTypes.bool,
  heroTitle: PropTypes.string.isRequired,
  heroContent: PropTypes.string.isRequired
};

export default Hero;
