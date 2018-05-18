 
var assert = require('assert')
// var expect = require('expect')

var app = require('../app.js')


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
// it('expect sayHelloInEnglish', function() {
//     expect(app.sayHelloInSpanish()).to.equal('Hola');
// });

// it('expect sayHelloInSpanish', function() {
//     expect(app.sayHelloInSpanish()).to.equal('Hola');
// });
// function foo() {
//     return 'bar';
// }
// it('should equal bar', function() {
//     expect(foo()).to.equal('bar');
// });
// it('should equal bar', function() {
//     expect(app.foo()).to.equal('bar');
// });
// it('should equal infinity', function() {
//     expect(app.INFINITY).to.equal('infinity');
// });
/* ... */
 


// require('../app.js');
// var app = require('./app.js');

// Array

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

// console.log('start');
//     	console.log(INFINITY);
//     	console.log('end');
// describe('INFINITY', function()
//     {

//         it('INFINITY === "INFINITY"',
//             function()
//             {
//                 expect(INFINITY)
//                     .to.equal('INFINITY');
//             });
//     });
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


// Math
// describe('Math',function () {
// 	// test 1
// 	it('should test if 3*3=9',function () {
// 		assert.equal(9,3*3);
// 	});

// 	// test 2
// 	it('should test if (3-4)*8 = -8 ',function () {
// 		assert.equal(-8,(3-4)*8);
// 	});
// });
