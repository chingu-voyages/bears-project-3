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
				<Menu.Item>
					<Image size="mini" src={logo} />
				</Menu.Item>
				<Route
					render={({ history }) => (
						<Menu.Item
							active
							header
							onClick={() => {
								history.push('/');
							}}
						>
							Home
						</Menu.Item>
					)}
				/>

<<<<<<< Updated upstream
				<Menu.Item as="a">Blog</Menu.Item>
				<Menu.Item as="a">Articles</Menu.Item>

				<Menu.Menu position="right">
					<AuthPopup title={'Sign In'} />
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
					<AuthPopup title={'Sign Up'}>
						<Link to="/signup">Signup with email</Link>
					</AuthPopup>
				</Menu.Menu>
			</Container>
		</Menu>
	);
=======
import AuthPopup from '../../Auth/components/AuthPopup';

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
        </Menu.Item>
        <Menu.Item active header>
          <Link to="/"><Image size="mini" src={logo} /></Link>
        </Menu.Item>
        {/* <Menu.Item as="a">Blog</Menu.Item>
        <Menu.Item as="a">Articles</Menu.Item> */}
        <Menu.Menu position="right">
          <AuthPopup navTitle="Login" />
          <AuthPopup navTitle="Register" />
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
>>>>>>> Stashed changes
};

export default Navigation;
