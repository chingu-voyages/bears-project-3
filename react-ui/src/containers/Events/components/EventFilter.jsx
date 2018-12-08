import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const EventsFilter = ({ activeItem, handleItemClick }) => {
	return (
		<Menu compact borderless floated="right">
			<Menu.Item header>Sort By</Menu.Item>
			<Menu.Item
				name="closest"
				active={activeItem === 'closest'}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name="mostComments"
				active={activeItem === 'mostComments'}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name="mostPopular"
				active={activeItem === 'mostPopular'}
				onClick={handleItemClick}
			/>
		</Menu>
	);
};

EventsFilter.propTypes = {};

export default EventsFilter;
