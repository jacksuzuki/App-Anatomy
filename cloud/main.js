var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log('in getConfig with ts:' + Date.now());
  var cfg = require("config.js");
  return callback(null, {data: cfg.config});
};

exports.getPhoto = function(params,callback){
  return callback(null,{photo:"http://photos-c.ak.fbcdn.net/hphotos-ak-ash3/523549_3608088763677_1317445200_33519801_256625859_s.jpg"});
};

exports.getAccessToken = function(params,array){
  return callback(null,{access_token:'AAAAAAITEghMBAIey3E0HP0nDurT3noUlRtZA8SkzFqanYnB209NbT6rOBZCKLDbkUMQbiESLzMqxfbZCS2O5avYiyv6LpSzBH0'});

};
