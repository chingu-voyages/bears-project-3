import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

// Middleware
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';

export const history = createBrowserHistory();

const composeWith = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const logger = createLogger();
const enhancers = [];

const middleware = [
  thunkMiddleware,
  logger,
  routerMiddleware(history),
];

const composedEnhancers = composeWith(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer(history), composedEnhancers);
