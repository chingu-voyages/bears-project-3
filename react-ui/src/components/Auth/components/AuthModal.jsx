import React from 'react';
import {
  Button, Header, Image, Modal, Menu, Popup,
} from 'semantic-ui-react';

const AuthPopup = ({ navTitle, children }) => (
  <Popup
    trigger={(
      <Menu.Item as="a">
        {navTitle}
      </Menu.Item>
    )}
    content={children}
    position="bottom right"
  />
);

export default AuthPopup;
