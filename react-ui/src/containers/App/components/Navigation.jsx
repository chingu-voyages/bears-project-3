import React from 'react';
import { Menu, Container, Button, Dropdown, Image } from 'semantic-ui-react';

const Navigation = ({ menuFixed, fixedMenuStyle, menuStyle }) => {
	menuFixed = true;
	return (
		<Menu
			borderless
			fixed={menuFixed ? 'top' : undefined}
			style={menuFixed ? fixedMenuStyle : menuStyle}
		>
			<Container text>
				<Menu.Item>
					<Image size="mini" src="/logo.png" />
				</Menu.Item>
				<Menu.Item header>Project Name</Menu.Item>
				<Menu.Item as="a">Blog</Menu.Item>
				<Menu.Item as="a">Articles</Menu.Item>

				<Menu.Menu position="right">
					<Dropdown text="Dropdown" pointing className="link item">
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
					</Dropdown>
				</Menu.Menu>
			</Container>
		</Menu>
	);
};

export default Navigation;
