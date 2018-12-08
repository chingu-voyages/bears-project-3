// import { createStore, applyMiddleware, compose } from 'redux';
// import createBrowserHistory from 'history/createBrowserHistory';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // Middleware
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import createRootReducer from './reducers/rootReducer';

// const composeWith = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
// const logger = createLogger();
// const enhancers = [];

// const middleware = [thunkMiddleware, logger, routerMiddleware(history)];
// const composedEnhancers = composeWith(applyMiddleware(...middleware), ...enhancers);

// // const configureStore = () =>

// export default createStore(createRootReducer(history), {}, composedEnhancers);


import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers/rootReducer';


export const history = createBrowserHistory();
const initialState = {};
const store = createStore(
  createRootReducer(history), // root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
);

export default store;
