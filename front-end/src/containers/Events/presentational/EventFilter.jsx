import React, { Fragment } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const EventFilter = ({
	handleItemClick,
	categories = [],
	selectedCategory = null,
	onSelectCategory
}) => {
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
	]

	/**
	 * Generates rest of list from saved categories
	 */
	const categoryList =
		categories &&
		categories.map((category, index) => ({
			key: `${category}`,
			text: category,
			value: category,
			content: category
		}))

	// Adds generated category list to menu options array
	options = options.concat(categoryList)

	// Allows user to filter events based on categories listed on page
	// const updateFilter = (e, { value }) => {
	// 	if (!value || value === '') {
	// 		return onSelectCategory('')
	// 	}
	// 	onSelectCategory(value)
	// }

	return (
		<Fragment>
			<Menu.Item header>Filter By</Menu.Item>
			<Menu.Item name="filterByCategory">
				<Dropdown
					button
					basic
					inline
					selection
					placeholder="Category"
					search
					className="link item"
					
					options={options}
					
					noResultsMessage="No Categories"
				/>
			</Menu.Item>
		</Fragment>
	)
}
export default EventFilter
