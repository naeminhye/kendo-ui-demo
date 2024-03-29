import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


let composeEnhancers = compose;

// If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  // if (window.__SAGA_MONITOR_EXTENSION__)
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };
  /* eslint-enable */
}
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store;