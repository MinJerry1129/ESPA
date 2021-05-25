import { NEXT_REDUX_STORE } from '@constants/global.constants';

import configureStore from '../store';

const isServer = typeof window === 'undefined';

export default function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return configureStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[NEXT_REDUX_STORE]) {
    window[NEXT_REDUX_STORE] = configureStore(initialState);
  }
  return window[NEXT_REDUX_STORE];
}
