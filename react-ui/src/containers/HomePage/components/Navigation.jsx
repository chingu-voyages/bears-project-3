import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const Navigation = ({ fixed }) => {
	return (
		<Menu
			fixed={fixed ? 'top' : null}
			inverted={!fixed}
			pointing={!fixed}
			secondary={!fixed}
			size="large"
		>
			<Container>
				<Menu.Item as="a" active>
					Home
				</Menu.Item>
				<Menu.Item as="a">Work</Menu.Item>
				<Menu.Item as="a">Company</Menu.Item>
				<Menu.Item as="a">Careers</Menu.Item>
				<Menu.Item position="right">
					<Button as="a" inverted={!fixed}>
						Log in
					</Button>
					<Button
						as="a"
						inverted={!fixed}
						primary={fixed}
						style={{ marginLeft: '0.5em' }}
					>
						Sign Up
					</Button>
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default Navigation;
