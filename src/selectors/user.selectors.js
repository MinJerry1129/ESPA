export const getAccount = (state) => state.user.get('account');
export const getAuthToken = (state) => state.user.get('authToken');
export const getUser = (state) => state.user.get('user');
export const getAccountPhoto = (state) => state.user.get('accountPhoto');
export const getIsLoading = (state) => state.user.get('isLoading');