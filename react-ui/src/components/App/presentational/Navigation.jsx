import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image, Button, Icon } from 'semantic-ui-react';
import AuthPopup from '../../Auth/presentational/AuthPopup';

const Navigation = ({ menuFixed, fixedMenuStyle, menuStyle, logo, auth }) => {
	menuFixed = true;

	// Checks if user is online with the session => (provider)
	const online = session => {
		var currentTime = new Date().getTime() / 1000;
		return session && session.access_token && session.expires > currentTime;
	};

	// Handle Google Signin button
	const signinWithGoogle = async e => {
		// Call auth api and signin with google (hello js)
		const authResponse = await auth.loginWith('google');
		console.log(authResponse);
	};

	// Handle Facebook signin button
	const signinWithFacebook = async e => {
		// Call auth api and signin with facebook (hello js)
		const authResponse = await auth.loginWith('facebook');
		console.log(authResponse);
	};

	// Test function to quickly check auth status...
	const checkAuthenticated = provider => {
		online(auth.isAuthenticated(provider))
			? console.log('You ARE logged in with: ', provider)
			: console.log('You are NOT logged in with: ', provider);
	};

	return (
		<Menu
			borderless
			fixed={menuFixed ? 'top' : undefined}
			style={menuFixed ? fixedMenuStyle : menuStyle}
		>
			<Container>
				<Menu.Item />
				<Menu.Item active header>
					<Link to="/">
						<Image size="mini" src={logo} />
					</Link>
				</Menu.Item>
				<Menu.Menu position="right">
					<AuthPopup title="Sign In">
						<div className="stacked" style={{ flexDirection: 'column' }}>
							<Button
								fluid
								circular
								style={{ marginTop: 5 }}
								onClick={signinWithGoogle}
								icon
								color="google plus"
							>
								<Icon name="google" /> Sign in with Google
							</Button>
							<Button
								fluid
								circular
								style={{ marginTop: 5 }}
								onClick={signinWithFacebook}
								icon
								color="facebook"
							>
								<Icon name="facebook" /> Sign in with Facebook
							</Button>
							{process.env.NODE_ENV === 'development' && (
								<Button
									onClick={() => checkAuthenticated('google')}
									basic
									style={{ marginTop: 5 }}
									circular
									fluid
								>
									Check auth....
								</Button>
							)}
							<Button basic style={{ marginTop: 5 }} circular fluid>
								<Link to="/signin">Sign in with email</Link>
							</Button>
						</div>
					</AuthPopup>
					<AuthPopup title="Sign Up">
						<Button basic style={{ marginTop: 5 }} circular fluid>
							<Link to="/signup">Sign up with email</Link>
						</Button>
					</AuthPopup>
				</Menu.Menu>
			</Container>
		</Menu>
	);
};

export default Navigation;
