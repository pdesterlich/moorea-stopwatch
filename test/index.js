'use strict';

var
  should = require('chai').should(),
  timer  = require('../');

describe('moorea-stopwatch', function () {

  it ('should measure about 100ms', function (done) {
    timer.start();
    setTimeout(function () {
      var elapsed = timer.elapsed();
      console.log('elapsed: ' + elapsed + ' ms');
      elapsed.should.be.above(50);
      elapsed.should.be.below(150);
      done();
    }, 100);
  });

  it ('should measure about 500ms', function (done) {
    timer.start();
    setTimeout(function () {
      var elapsed = timer.elapsed();
      console.log('elapsed: ' + elapsed + ' ms');
      elapsed.should.be.above(450);
      elapsed.should.be.below(550);
      done();
    }, 500);
  });

  it ('should measure about 1000ms', function (done) {
    timer.start();
    setTimeout(function () {
      var elapsed = timer.elapsed();
      console.log('elapsed: ' + elapsed + ' ms');
      elapsed.should.be.above(950);
      elapsed.should.be.below(1050);
      done();
    }, 1000);
  });

});
