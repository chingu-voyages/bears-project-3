import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
// Redux
import { Provider } from 'react-redux';
import store, { history as reduxHistory } from './store/store';

// CSS
import './index.css';
import 'semantic-ui-css/semantic.min.css';
// TODO: After building custom Semantic-UI theme w/ Gulp, include minified CSS file here

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Page Container Components
import HomePage from './components/HomePage/HomePage';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Profile from './components/Profile/Profile';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={reduxHistory}>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
      </App>
    </ConnectedRouter>
  </Provider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
