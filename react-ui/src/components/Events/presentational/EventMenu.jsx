import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EventFilter from './EventFilter';

const EventMenu = ({ categories, handleChange, history, router }) => {
	console.log(router);
	return (
		<div
			className="event-list-header"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: '1 em'
			}}
		>
			<Menu borderless fluid style={{ border: 'none', boxShadow: 'none' }}>
				<Menu.Item>
					<Header as="h2">Events for this week</Header>
				</Menu.Item>
				<Menu.Item position="right">
					<EventFilter categories={categories} />
				</Menu.Item>
				<Menu.Item name="closest">
					<Button
						attached="left"
						color="purple"
						active={router.location.pathname === '/find'}
						onClick={() => history.replace('/find')}
					>
						Events
					</Button>
					<Button
						attached="right"
						color="purple"
						active={router.location.pathname === '/find/calendar'}
						onClick={() => history.replace('/find/calendar')}
					>
						Calendar
					</Button>
				</Menu.Item>
			</Menu>
		</div>
	);
};

EventMenu.propTypes = {};

export default EventMenu;
