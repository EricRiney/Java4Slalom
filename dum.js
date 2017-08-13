// const get = require('simple-get');

// while(true) {
//     console.log('test');
//     meow;
// }

// var meow = get.concat('http://127.0.0.1:9090', function (err, res, data) {
//         if (err) throw err
//         console.log(res.statusCode) // 200 
//         console.log(data) // Buffer('this is the server response') 
// })

// var async = require('async');
// var request = require('request');
// var Q = require('q');
// var defer = Q.defer();
// var promise = defer.promise;
// var locations = ['http://127.0.0.1:9090'],
// results = [];

// locations.forEach(function(location, index) {
//   request.get(location, function(error, response, body) {
//     if (!error && parseInt(response.statusCode) === 200) {
//        results.push(response.statusCode);
//     }
//     if ((locations.length - 1) === index) {
//       defer.resolve();
//     }
//   });
// });

// promise.then(function() {
//   console.log('RESULTS:', results);
// });

// var page = 2,
//     lastPage = 100;

// async.whilst(function () {
//   return true;
// },
// function (next) {
//   request('http://127.0.0.1:9090' + page, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       store_data(body)
//     }
//     page++;
//     next();
//   });
// },
// function (err) {
//   // All things are done!
// });

// var request = require('request');
// var meow = request('http://127.0.0.1:9090', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// for (var i = 0; i < 10; i++) {
//     meow;
//     console.log(i);
//     meow;
// }


var http = require('http');
var async = require('async');

var options = {
  hostname: '127.0.0.1',
  port: 9090,
  path: '/',
  method: 'GET'
};

function sendRequestWrapper(n, done){
  console.log('Calling sendRequest', n);
  sendRequest(options, function(err){
    done(err);
  });
};

function sendRequest(options, callback){
  //console.log('hello');
  var start = new Date();
  var req = http.request(options,function(res) {
    // I don't know if this callback is called for error responses
    // I have only used the `request` library which slightly simplifies this
    // Under some circumstances you can accidentally cause problems by calling
    // your callback function more than once (e.g. both here and on('error')

    console.log('Request took:', new Date() - start, 'ms');
    callback(null);
  });
  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
    callback(e);
  });
  req.end();
};

async.timesSeries(10, sendRequestWrapper);
