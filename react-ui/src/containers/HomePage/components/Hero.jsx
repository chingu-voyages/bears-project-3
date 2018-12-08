import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';

const Hero = ({ mobile }) => (
	<Segment inverted textAlign="center" style={{ minHeight: 500, padding: '1em 0em' }} vertical>
		<Container text className={'hero homepage-hero'}>
			<Header
				inverted
				as="h1"
				content="Imagine-a-Company"
				style={{
					fontSize: mobile ? '2em' : '4em',
					fontWeight: 'normal',
					marginBottom: 0,
					marginTop: mobile ? '1.5em' : '3em'
				}}
			/>
			<Header
				inverted
				as="h2"
				content="Do whatever you want when you want to."
				style={{
					fontSize: mobile ? '1.5em' : '1.7em',
					fontWeight: 'normal',
					marginTop: mobile ? '0.5em' : '1.5em'
				}}
			/>
			<Button primary size="huge">
				Get Started
				<Icon name="right arrow" />
			</Button>
		</Container>
	</Segment>
);

Hero.propTypes = {
	mobile: PropTypes.bool
};
export default Hero;
