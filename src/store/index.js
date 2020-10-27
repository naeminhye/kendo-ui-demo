import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();

const store = compose(
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

// saga.run()

export default store;