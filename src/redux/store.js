import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = preloadedState => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }
  const composed = [applyMiddleware(...middlewares)];

  return createStore(rootReducer, preloadedState, compose(...composed));
};

export default configureStore;
