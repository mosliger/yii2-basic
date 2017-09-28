import fetch from 'isomorphic-fetch'
import config from '../../configs'

require('es6-promise').polyfill()

const host = config.host

/**
 * Fetch API
 * @param  {String} url     path request to service
 * @param  {Object} options headers, body, method
 * @return {Any} response data from service
 */

function getOptions(obj = {}) {
  const options = {
    method: obj.method ? obj.method : 'GET',
    headers: {
      ...obj.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (options.method !== 'GET') options.body = JSON.stringify(obj.body)
  return options
}

const fetchApi = (url, options) => {
  return fetch(`${host}${url}`, getOptions(options))
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
    })
}

export default fetchApi
