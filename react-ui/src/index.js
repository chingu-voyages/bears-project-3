import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';

// Redux
import { Provider } from 'react-redux';
import store, { history as reduxHistory } from './store/store';

// CSS
import './index.css';
import 'semantic-ui-css/semantic.min.css';
// TODO: After building custom Semantic-UI theme w/ Gulp, include minified CSS file here

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

// const store = configureStore();

const target = document.getElementById('root');


const renderHMR = Component => render(
  <Provider store={store}>
    <ConnectedRouter history={reduxHistory}>
      <Component />
    </ConnectedRouter>
  </Provider>,
  target,
);

renderHMR(App);

if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    const NextApp = require('./containers/App/App').default;
    renderHMR(NextApp);
  });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
