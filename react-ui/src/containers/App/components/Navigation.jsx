import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, Container, Button, Dropdown, Image,
} from 'semantic-ui-react';

const Navigation = ({
  menuFixed, fixedMenuStyle, menuStyle, logo,
}) => {
  menuFixed = true;
  return (
    <Menu
      borderless
      fixed={menuFixed ? 'top' : undefined}
      style={menuFixed ? fixedMenuStyle : menuStyle}
    >
      <Container>
        <Menu.Item>
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item active header>
          Home
        </Menu.Item>
        <Menu.Item as="a">Blog</Menu.Item>
        <Menu.Item as="a">Articles</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as="a">Sign In</Menu.Item>
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
        <Menu.Item as="a">
          <Link to="/register">Register</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navigation;
