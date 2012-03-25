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
  var json;
  var http = require('http');

http.get({
    host: 'graph.facebook.com',
    path: '/me/home?access_token=AAAAAAITEghMBABB6WfafGYwthD3sVOFqYAXDrzQWmwcZCWcvvZAG6VS1BJmkXinzZBd6onfRWw8snMmlZCSeMibkQvQBOXNRkAxb6DRb7',
}, function(res) {
    var body = ""
    res.on('data', function(data) {
        console(data);
        json = data;
    });
    res.on('end', function() {
        console.log(body);
    });
});
  return callback(null,{access_token:"AAAAAAITEghMBABB6WfafGYwthD3sVOFqYAXDrzQWmwcZCWcvvZAG6VS1BJmkXinzZBd6onfRWw8snMmlZCSeMibkQvQBOXNRkAxb6DRb7aiuiQMbqNfn"});
};

