const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// var INFINITY = 'infinity';

// function foo() {
//     return 'bar';
// }
// greetings.js
var exports = module.exports = {};

exports.sayHelloInEnglish = function() {
  return "HELLO";
};

exports.sayHelloInSpanish = function() {
  return "Hola";
};

exports.cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

exports.fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}
// module.exports.foo = {
//     return 'bar';
// }

// exports._test = {
//     INFINITY: INFINITY,
//     foo: foo
// }


// function fn1() {
// 	return 5*3;
// }

// 'use strict';

// if (true) {
// 	console.log('...true...');
// }
 
// var INFINITY = 'INFINITY';

// cToF = function(celsius) {
//   if(!Number.isInteger(celsius)) return undefined;
//   return celsius * 9 / 5 + 32;
// }

// fToC = function(fahrenheit) {
//   if(!Number.isInteger(fahrenheit)) return undefined;
//   return (fahrenheit - 32) * 5 / 9;
// }
 
