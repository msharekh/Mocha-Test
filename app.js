//node part 

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// ***** creating server *****
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var INFINITY = 'infinity';

function foo() {
    return 'bar';
}
 
//exported functions
var exports = module.exports = {};


exports._test = {
    INFINITY: INFINITY,
    foo: foo
}

console.log(000);

console.log(exports._test.INFINITY);

console.log(111);

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
 

 
 
 
 
