import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Button } from 'semantic-ui-react';

import eventsAction from '../../../store/actions/eventsAction';

const EventFilter = ({ handleItemClick, categories, setFilter }) => {
	/**
   * Initializes menu options with empty placeholder; placeholder doubles as
   * selection to clear filter category selection
   */
	let options = [
		{
			key: '-1',
			text: 'Select Category',
			value: '',
			content: 'Select Category'
		}
	];

	// Generates rest of list from saved categories
	const categoryList =
		categories &&
		categories.map((category, index) => ({
			key: `${category}${index}`,
			text: category,
			value: category,
			content: category
		}));

	// Adds generated category list to menu options array
	options = options.concat(categoryList);
	// Allows user to filter events based on categories listed on page
	const updateFilter = (e, { value }) => {
		if (!value || value === '') {
			setFilter('');
		}

		setFilter(value);
	};

	return (
		<Fragment>
			<Menu.Item header>Filter By</Menu.Item>
			<Menu.Item name="filterByCategory">
				<Dropdown
					selection
					placeholder="Category"
					search
					basic
					className="link item"
					onChange={updateFilter}
					options={options}
				/>
			</Menu.Item>
		</Fragment>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.events.eventCategories
	};
};

const mapDispatchToProps = dispatch => ({
	setFilter: filter => {
		dispatch(eventsAction(filter));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(EventFilter);
