import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'semantic-ui-react';

const EventFilter = ({ handleItemClick, handleChange, categories }) => {
	const options =
		categories &&
		categories.map((category, index) => ({
			key: `${category}${index}`,
			text: category,
			value: category,
			content: category
		}));
	return (
		<Fragment>
			<Menu.Item header>Filter By</Menu.Item>

			<Menu.Item name="filterByCategory">
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
			<Menu.Item name="closest" onClick={handleItemClick} />
			<Menu.Item name="mostPopular" onClick={handleItemClick} />
		</Fragment>
	);
};

EventFilter.propTypes = {};

export default EventFilter;
