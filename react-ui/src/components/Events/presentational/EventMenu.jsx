import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Header, Button } from 'semantic-ui-react';
import EventFilter from './EventFilter';

const EventMenu = ({ categories, handleChange, history, router, selectDay, setFilter }) => {
	const handleListClick = () => {
		selectDay(null);
		history.replace('/find');
	};

	const handleCalendarClick = () => {
		setFilter('');
		history.replace('/find/calendar');
	};
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
						onClick={handleListClick}
					>
						Events
					</Button>
					<Button
						attached="right"
						color="purple"
						active={router.location.pathname === '/find/calendar'}
						onClick={handleCalendarClick}
					>
						Calendar
					</Button>
				</Menu.Item>
			</Menu>
		</div>
	);
};

EventMenu.propTypes = {
	categories: PropTypes.instanceOf(Array),
	handleChange: PropTypes.func,
	history: PropTypes.instanceOf(Object),
	router: PropTypes.instanceOf(Object),
	selectDay: PropTypes.func,
	setFilter: PropTypes.func
};

export default EventMenu;
