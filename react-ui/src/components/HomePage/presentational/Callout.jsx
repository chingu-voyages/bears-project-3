import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Segment, Header, Button, Icon } from 'semantic-ui-react';

const Callout = ({ title, description = '', link }) => {
  return (
    <div className="Callout" style={{ backgroundColor: 'rgb(83, 89, 154)' }}>
      <Container>
        <Segment
          basic
          style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}
        >
          <Header
            as="h1"
            style={{ color: '#FCFCFC', fontFamily: 'Bungee', fontSize: '3em' }}
          >
            {title}
          </Header>
          <Header as="h3" style={{ color: '#FCFCFC', fontSize: '2em' }}>
            {description}
          </Header>
          <Link to={link}>
            <Button
              animated
              size="huge"
              style={{ backgroundColor: 'rgb(128, 222, 217)' }}
            >
              <Button.Content visible>Find Events</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Link>
        </Segment>
      </Container>
    </div>
  );
};

Callout.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Callout;
