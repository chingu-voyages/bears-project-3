import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';

import { setFilter } from '../../../store/actions/setFilter';

const EventFilter = ({ handleItemClick, categories, setFilter, selectedCategory }) => {
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
	let selectedValue = '';

	// Generates rest of list from saved categories
	const categoryList =
		categories &&
		categories.map((category, index) => ({
			key: `${category}`,
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
		selectedValue = value;
	};

	return (
		<Fragment>
			<Menu.Item header>Filter By</Menu.Item>
			<Menu.Item name="filterByCategory">
				<Dropdown
					basic
					inline
					selection
					placeholder="Category"
					search
					className="link item"
					onChange={updateFilter}
					options={options}
					value={selectedCategory}
				/>
			</Menu.Item>
		</Fragment>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.events.eventCategories,
		selectedCategory: state.events.selectedCategory
	};
};

const mapDispatchToProps = dispatch => ({
	setFilter: filter => {
		dispatch(setFilter(filter));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(EventFilter);
