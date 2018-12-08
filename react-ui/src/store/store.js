import { createStore, applyMiddleware } from 'redux';

// Middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const logger = createLogger();

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
