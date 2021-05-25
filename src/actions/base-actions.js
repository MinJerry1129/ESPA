/**
 * Base actions for work with store by selected reducer
 */
export default class BaseActions {

  /** Select reducer
  * @constructor
  * @param reducer
  */
  constructor(reducer) {
    this.reducer = reducer;
  }

  /**
  * Set value to reducer
  * @param {string|array} field
  * @param {any} value
  * @param {boolean} [isFromJS]
  * @returns {function}
  */
  setValue(field, value, isFromJS = true) {
    return this.callAction('set', { field, value, isFromJS });
  }

  /**
  * Set multiple values
  * @param {Object} payload
  * @returns {Function}
  */
  setMultipleValue(payload) {
    return this.callAction('setMultiple', payload);
  }

  /**
   * set in
   * @param {string} field
   * @param {string} params
   * @return {function(...[*]=)}
   */
  setIn(field, params) {
    return this.callAction('setIn', { field, params });
  }

  /**
  * Reset reducer to default values
  * @returns {Function}
  */
  clear() {
    return this.callAction('clear');
  }

  /**
  * Reset only one field in reducer to default values
  * @param {String} field
  * @returns {Function}
  */
  clearByField(field) {
    return this.callAction('clearByField', { field });
  }

  /**
  * Is exist reducer
  * @returns {boolean}
  * @private
  */
  isExistReducer() {
    return !!this.reducer || !!this.reducer.actions;
  }

  /**
  * Is exist called reducer action
  * @param {String} name
  * @returns {boolean}
  * @private
  */
  isExistAction(name) {
    return !!this.reducer.actions[name];
  }

  /**
  * Call reducer action
  * @param {String} action
  * @param payload
  * @returns {Function}
  * @private
  */
  callAction(action, payload = undefined) {
    if (!this.isExistReducer()) {
      throw new Error('Reducer not found');
    }
    if (!this.isExistAction(action)) {
      throw new Error(`Action "${action}" in reducer not found`);
    }
    return (dispatch) => {
      dispatch(this.reducer.actions[action](payload));
    };
  }

}
