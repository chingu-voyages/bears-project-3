import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const EventFilter = ({ activeItem, handleItemClick }) => (
  <Fragment>
    <Menu.Item header>Filter By</Menu.Item>
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
  </Fragment>
);

EventFilter.propTypes = {};

export default EventFilter;
