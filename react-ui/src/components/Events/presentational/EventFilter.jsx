import React, { Fragment } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

const EventFilter = ({ handleItemClick, handleChange, categories }) => {
  /**
   * Initializes menu options with empty placeholder; placeholder doubles as
   * selection to clear filter category selection
   */
  let options = [
    {
      key: '-1', text: 'Select Category', value: '', content: 'Select Category',
    },
  ];

  // Generates rest of list from saved categories
  const categoryList = categories
    && categories.map((category, index) => ({
      key: `${category}${index}`,
      text: category,
      value: category,
      content: category,
    }));

  // Adds generated category list to menu options array
  options = options.concat(categoryList);

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
          onChange={handleChange}
          options={options}
        />
      </Menu.Item>
      <Menu.Item name="closest" onClick={handleItemClick} />
      <Menu.Item name="mostPopular" onClick={handleItemClick} />
    </Fragment>
  );
};

export default EventFilter;
