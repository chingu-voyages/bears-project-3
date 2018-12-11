import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'semantic-ui-react';

const EventFilter = ({ handleItemClick, handleChange, categories }) => {
  let options = [
    {
      key: '-1', text: 'Select Category', value: '', content: 'Select Category',
    },
  ];
  const categoryOptions = categories
    && categories.map((category, index) => ({
      key: `${category}${index}`,
      text: category,
      value: category,
      content: category,
    }));
  options = options.concat(categoryOptions);
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

EventFilter.propTypes = {};

export default EventFilter;
