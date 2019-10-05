import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = preloadedState => {
  const middlewares = [thunk];
  const composed = [applyMiddleware(...middlewares)];

  return createStore(rootReducer, preloadedState, compose(...composed));
};

export default configureStore;
