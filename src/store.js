import thunk from 'redux-thunk';
import dynamic from 'next/dynamic';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSentryMiddleware from 'redux-sentry-middleware';
// import logger from 'redux-logger';
import * as Sentry from '@sentry/browser';

import reducers from './reducers';

export default function configureStore(preloadState) {
  const store = createStore(
    combineReducers({
      ...reducers,
    }), preloadState,
    composeWithDevTools(compose(
      applyMiddleware(thunk),
      applyMiddleware(batchDispatchMiddleware),
      // applyMiddleware(logger),
      applyMiddleware(createSentryMiddleware(Sentry)),
    )),
  );


  // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createNextReducer = dynamic(() => import('./reducers'));
      store.replaceReducer(createNextReducer(preloadState));
    });
  }

  return store;
}
