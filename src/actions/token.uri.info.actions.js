import BaseActions from '@actions/base-actions';
import reducer from '../reducers/token.uri.info.reducer';

class TokenURIInfoActions extends BaseActions {

  setGarmentInfo(id, value) {
    return (dispatch, getState) => {
      const state = getState();
      const garmentsInfoById = state.tokenURIInfo.get('garmentsInfoById').set(id, value);
      dispatch(this.setValue('garmentsInfoById', garmentsInfoById));
    };

  }

}

export default new TokenURIInfoActions(reducer);
