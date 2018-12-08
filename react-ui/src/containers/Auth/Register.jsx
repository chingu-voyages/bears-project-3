import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Register extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        Register
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Register);
