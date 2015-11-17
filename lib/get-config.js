/**
 * Exports get config function
 * @type {Function}
 */
module.exports = getConfig;

/**
 * Gets cloudflare config
 * Checks if `config.json` file exists and validates it before using for API
 * @return {Promise}
 */
function getConfig() {
  return new Promise(function configPromise(resolve, reject) {

    try {

      // gets config
      var config = require('../config');
      var cloudflare = config.cloudflare;

      // validates config and resolves promise
      if (cloudflare.key && cloudflare.email && cloudflare.zone && cloudflare.endpoint) {
        resolve(cloudflare);
      } else {
        throw 'Invalid config';
      }

    } catch(err) {

      // Pretty up error message for module not found
      if (err.code === 'MODULE_NOT_FOUND') {
        err = 'Config file not found.';
      }

      // Rejects promise
      reject({ error: err });

    }
  });
};
