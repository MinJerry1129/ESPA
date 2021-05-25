import axios from 'axios';
import qs from 'qs';
import axiosRetry from 'axios-retry';
import { getAuthToken } from '@helpers/user.helpers';
import { STAGE_ESPA_BACKEND_URL } from '@constants/global.constants';

import 'core-js/es/string';
import 'core-js/es/number';
import 'core-js/es/array';

require('es6-promise').polyfill();
require('es6-object-assign').polyfill();

const DEFAULT_OPTIONS = { withCredentials: true };

axios.defaults.baseURL = STAGE_ESPA_BACKEND_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axiosRetry(axios, {
  retries: 1,
  retryCondition: (error) => !error.response,
});

/**
 * Execute all requests
 * @param {String} method
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
function executeRequest(method, url, data, options = DEFAULT_OPTIONS, headers = {}) {
  const params = {
    method,
    url,
    data,
    options: {
      ...options,
      ...DEFAULT_OPTIONS,
    },
    headers: {
      Authorization: getAuthToken(),
    },
  };

  return new Promise((resolve, reject) => {
    axios(params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Get method
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
export function get(url, data, options) {
  const query = qs.stringify(data, { encode: true, arrayFormat: 'brackets' });
  return executeRequest('get', `${url}?${query || ''}`, null, options);
}

/**
 * Post method
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
export function post(url, data, options) {
  // if need upload file use this post
  return executeRequest('post', `${url}`, data, options);
}

/**
 * Patch method
 * @param {String}url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
export function patch(url, data, options) {
  return executeRequest('patch', `${url}`, data, options);
}

/**
 * Put method
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
export function put(url, data, options) {
  return executeRequest('put', `${url}`, data, options);
}

/**
 * Delete method
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
export function del(url, data, options) {
  return executeRequest('delete', `${url}`, data, options);
}
