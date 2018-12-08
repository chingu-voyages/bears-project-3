import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/store';

// CSS
import './index.css';
import 'semantic-ui-css/semantic.min.css';
// TODO: After building semantic-ui w/ Gulp, include minified CSS file here

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
