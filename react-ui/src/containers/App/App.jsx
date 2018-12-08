import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { testAction } from '../../store/actions/testAction';

// Containers


// Components


// Assets
import logo from '../../assets/images/logo.svg';

// CSS
import './App.css';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction()),
});

class App extends Component {
  testAction = (event) => {
    this.props.testAction();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <pre>
            {JSON.stringify(this.props)}
          </pre>
          <button onClick={this.testAction}>Test Redux Action</button>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
