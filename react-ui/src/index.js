import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';

// Redux
import { Provider } from 'react-redux';
import store, { history as reduxHistory } from './store/store';
import rootReducer from './store/reducers/rootReducer';
// CSS
import './index.css';
import 'semantic-ui-css/semantic.min.css';
// TODO: After building custom Semantic-UI theme w/ Gulp, include minified CSS file here

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

console.log(store.getState());
// const store = configureStore();

const target = document.getElementById('root');

const renderHMR = () => {
	render(
		<AppContainer>
			<Provider store={store}>
				<App history={reduxHistory} />
			</Provider>
		</AppContainer>,
		target
	);
};

renderHMR(App);

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./containers/App/App', () => {
		renderHMR();
	});

	// Reload reducers
	module.hot.accept('./store/reducers/rootReducer', () => {
		store.replaceReducer(rootReducer(reduxHistory));
	});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
