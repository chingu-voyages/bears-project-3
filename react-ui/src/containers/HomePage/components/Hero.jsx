import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';

const Hero = ({ mobile, heroTitle, heroContent }) => (
	<Segment
		inverted
		textAlign="center"
		style={{
			minHeight: 500,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '2em 0'
		}}
		vertical
	>
		<Container text className={'hero homepage-hero'}>
			<Header
				inverted
				as="h1"
				content={heroTitle}
				style={{
					fontSize: mobile ? '2em' : '4em',
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
