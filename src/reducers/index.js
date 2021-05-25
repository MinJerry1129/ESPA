import user from './user.reducer';
import modals from './modals.reducer';
import global from './global.reducer';
import tokenURIInfo from './token.uri.info.reducer';
import tournament from './tournament.reducer';

export default {
  user: user.reducer,
  modals: modals.reducer,
  global: global.reducer,
  tokenURIInfo: tokenURIInfo.reducer,
  tournament: tournament.reducer
};
