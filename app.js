
// AWS Lambda doesn't have promise
require('es6-promise').polyfill();

var axios = require('axios');
var getConfig = require('./lib/get-config')


exports.handler = function(event, context) {

  getConfig()
    .then(function(config) {
      return axios({
        method: 'delete',
        headers: {
          'X-AUTH-KEY': config.key,
          'X-AUTH-EMAIL': config.email
        },
        url: config.endpoint + '/zones/' + config.zone + '/purge_cache',
        data: { purge_everything: true }
      });
    })
    .then(function(apiResponse) {
      console.log('success...', apiResponse.data);
      context.done(null, apiResponse.data)
    })
    .catch(function(err) {
      console.log('error...', err);
      context.done(null, {error: err})
    })
};
