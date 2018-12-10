import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'semantic-ui-react';

const EventFilter = ({ activeItem, handleItemClick, handleChange, categories }) => {
	const options = categories.map((category, index) => ({
		key: `${category}${index}`,
		text: category,
		value: category,
		content: category
	}));
	return (
		<Fragment>
			<Menu.Item header>Filter By</Menu.Item>

			<Menu.Item
				name="mostComments"
				active={activeItem === 'mostComments'}
				onClick={handleItemClick}
			>
				<Dropdown
					placeholder="Category"
					search
					selection
					header="Category"
					basic
					className="link item"
					onChange={handleChange}
					options={options}
				/>
			</Menu.Item>
			<Menu.Item
				name="closest"
				active={activeItem === 'closest'}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name="mostPopular"
				active={activeItem === 'mostPopular'}
				onClick={handleItemClick}
			/>
		</Fragment>
	);
};

EventFilter.propTypes = {};

export default EventFilter;
