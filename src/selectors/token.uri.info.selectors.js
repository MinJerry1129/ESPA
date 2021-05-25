export const getGarmentsInfoById = (id) => (state) =>
  state.tokenURIInfo.getIn(['garmentsInfoById', id]);
