 
var assert = require('assert')
// var expect = require('expect')

var app = require('../custom.js')


it('assert sayHelloInEnglish',function () {
	assert.equal(app.sayHelloInEnglish(),'HELLO');
});

it('assert sayHelloInSpanish',function () {
	assert.equal(app.sayHelloInSpanish(),'Hola');
});


it('should equal bar',function () {
	assert.equal(app._test.foo(),'bar');
});
 
 it('should equal infinity',function () {
	assert.equal(app._test.INFINITY,'infinity');
});


it('should return -1 when the value is not present',function () {
	assert.equal([1,2,3].indexOf(4),-1);
});
describe('Array',function() {
	describe('#indexOf()',function () {
		it('should return -1 when the value is not present',function () {
			assert.equal([1,2,3].indexOf(4),-1);
		});
	});
});

 
// Temperature
describe('Temperature Conversion', function() {
  
  describe('cToF', function() {
    // tests here
	it('should convert -40 celsius to -40 fahrenheit', function() {
	   assert.equal(-40, app.cToF(-40));
	  // assert.equal(undefined, cToF(''));

	});

  });

  describe('fToC', function() {
    // tests here
    it('should convert 0 celsius to 32 fahrenheit', function() {
	  assert.equal(32, app.cToF(0));
	});

  });
});


 
