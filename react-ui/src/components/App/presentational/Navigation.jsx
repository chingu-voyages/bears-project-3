import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image, Button, Icon } from 'semantic-ui-react';
import AuthPopup from '../../Auth/presentational/AuthPopup';

const Navigation = ({ menuFixed, fixedMenuStyle, menuStyle, logo, auth }) => {
	menuFixed = true;

	const signinWithGoogle = e => {
		console.log(e);
		auth.loginWith('google', function(err, authResult) {
			console.log(err, authResult);
		});
	};
	const signinWithFacebook = e => {
		console.log(e);
		auth.loginWith('facebook', function(err, authResult) {
			console.log(err, authResult);
		});
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
