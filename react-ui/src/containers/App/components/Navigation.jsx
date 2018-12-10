import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu, Container, Button, Dropdown, Image } from 'semantic-ui-react';
import AuthPopup from '../../Auth/components/AuthPopup';

const Navigation = ({ menuFixed, fixedMenuStyle, menuStyle, logo }) => {
	menuFixed = true;
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
				<Menu.Item header>
					<Link style={{ color: '#53599A' }} to="/">
						Home
					</Link>
				</Menu.Item>
				{/* <Menu.Item as="a">Blog</Menu.Item>
        <Menu.Item as="a">Articles</Menu.Item> */}
				<Menu.Menu position="right">
					<AuthPopup title="Sign In" />
					<AuthPopup title="Sign Up">
						<Link to="/signup">Sign Up with email</Link>
					</AuthPopup>
					{/* <Dropdown text="Dropdown" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
				</Menu.Menu>
			</Container>
		</Menu>
	);
};

export default Navigation;
