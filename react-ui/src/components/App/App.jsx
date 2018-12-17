import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

// Global Components
import Header from './presentational/Header';
import Footer from './presentational/Footer';

// Assets
import logo from '../../assets/images/logo.svg';

// CSS
import './App.css';

class App extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Header logo={logo} />
        {children}
        <Footer />
      </Responsive >
    );
  }
}

export default App;
