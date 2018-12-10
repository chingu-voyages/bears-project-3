import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Segment, Header, Button } from 'semantic-ui-react';

const Callout = ({ title, description = '', link }) => {
	return (
		<div className="Callout" style={{ backgroundColor: 'rgb(83, 89, 154)' }}>
			<Container>
				<Segment
					basic
					style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}
				>
					<Header as="h1" style={{ color: '#FCFCFC', fontFamily: 'Bungee' }}>
						{title}
					</Header>
					<Header as="h3" style={{ color: '#FCFCFC' }}>
						{description}
					</Header>
					<Link to={link}>
						<Button
							size="huge"
							style={{
								backgroundColor: 'rgb(128, 222, 217)',
								color: '#FCFCFC',
								marginTop: 30
							}}
						>
							Search...
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
