import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  garmentsInfoById: Map({}),
});

export default createModule({
  name: 'tokenURIInfo',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
