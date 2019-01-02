import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Container, Image, Button, Popup } from 'semantic-ui-react'

import logo from '../../../assets/logo.svg';

const Header = () => {

  return (
    <Menu
      borderless
    >
      <Container>
        <Menu.Item active header>
          <Link to="/">
            <Image size="mini" src={logo} />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Popup
            basic
            position="bottom center"
            verticalOffset={-10}
            on="click"
            trigger={
              <Menu.Item >
                Sign in &nbsp;|&nbsp; Join
              </Menu.Item>
            }
            content={
              <div>
                <Button basic fluid style={{ marginBottom: 5 }}>
                  <Link to="/signin">
                    Sign in with email
                  </Link>
                </Button>
                <Button basic fluid>
                  <Link to="/register">
                    Register
                  </Link>
                </Button>
              </div>
            }
          />
        </Menu.Menu>
      </Container>
    </Menu >
  );
}

export default Header
