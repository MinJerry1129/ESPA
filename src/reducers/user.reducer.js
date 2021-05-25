import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  account: null,
  user: null,
  authToken: null,
  accountPhoto: './images/user-photo.svg',
  bids: List([]),
  activeProductInModal: Map({}),
});

export default createModule({
  name: 'user',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
