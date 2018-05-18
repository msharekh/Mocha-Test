//exported functions
var exports = module.exports = {};

var INFINITY = 'infinity';

function foo() {
    return 'bar';
}
 

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
 