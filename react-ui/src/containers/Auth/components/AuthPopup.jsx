import React from 'react';
<<<<<<< Updated upstream
import PropTypes from 'prop-types';
import { Popup, Menu } from 'semantic-ui-react';

const AuthPopup = ({ title, children }) => {
	return (
		<Popup
			hoverable
			verticalOffset={-10}
			flowing
			basic
			style={{
				borderRadius: 0,
				boxShadow: '0 0 0 transparent'
			}}
			trigger={<Menu.Item as="a">{title}</Menu.Item>}
		>
			<Popup.Header>{title}</Popup.Header>
			<Popup.Content>{children}</Popup.Content>
		</Popup>
	);
};

AuthPopup.propTypes = {};
=======
import {
  Popup, Menu,
} from 'semantic-ui-react';

const AuthPopup = ({ navTitle, children }) => (
  <Popup
    hoverable
    basic
    on={['hover', 'click']}
    verticalOffset={-10}
    style={{ borderRadius: 0, boxShadow: 'none' }}
    trigger={(
      <Menu.Item as="a">
        {navTitle}
      </Menu.Item>
    )}
    position="bottom right"
  >
    <Popup.Header>{navTitle}</Popup.Header>
    <Popup.Content>
      Form Here
    </Popup.Content>
  </Popup>
);
>>>>>>> Stashed changes

export default AuthPopup;
