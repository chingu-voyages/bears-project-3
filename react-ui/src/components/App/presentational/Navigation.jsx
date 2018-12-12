import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react';
import AuthPopup from '../../Auth/presentational/AuthPopup';

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
        <Menu.Item />
        <Menu.Item active header>
          <Link to="/">
            <Image size="mini" src={logo} />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <AuthPopup title="Sign In" />
          <AuthPopup title="Sign Up">
            <Link to="/signup">Sign up with email</Link>
          </AuthPopup>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navigation;
