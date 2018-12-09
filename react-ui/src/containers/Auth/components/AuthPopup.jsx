import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Menu } from 'semantic-ui-react';

const AuthPopup = ({ title }) => {
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
			<Popup.Content>Insert form here</Popup.Content>
		</Popup>
	);
};

AuthPopup.propTypes = {};

export default AuthPopup;
