'use strict';

var
  should    = require('chai').should(),
  StopWatch = require('../');

describe('moorea-stopwatch', function () {

  it ('should measure about 100ms', function (done) {
    var timer = new StopWatch();
    setTimeout(function () {
      var elapsed = timer.elapsed();
      console.log('elapsed: ' + elapsed + ' ms');
      elapsed.should.be.above(50);
      elapsed.should.be.below(150);
      done();
    }, 100);
  });

  it ('should measure about 500ms', function (done) {
    var timer = new StopWatch();
    setTimeout(function () {
      var elapsed = timer.elapsed();
      console.log('elapsed: ' + elapsed + ' ms');
      elapsed.should.be.above(450);
      elapsed.should.be.below(550);
      done();
    }, 500);
  });

  it ('should measure about 1000ms', function (done) {
    var timer = new StopWatch();
    setTimeout(function () {
      var elapsed = timer.elapsed();
      console.log('elapsed: ' + elapsed + ' ms');
      elapsed.should.be.above(950);
      elapsed.should.be.below(1050);
      done();
    }, 1000);
  });

  it ('should handle two different stopwatch at the same time', function (done) {
    var timer = new StopWatch();
    setTimeout(function () {
      var secondTimer = new StopWatch();
      setTimeout(function () {
        console.log(timer);
        console.log(secondTimer);
        var elapsedFirst = timer.elapsed();
        var elapsedSecond = secondTimer.elapsed()
        console.log('elapsed first: ' + elapsedFirst + ' ms');
        console.log('elapsed second: ' + elapsedSecond + ' ms');
        elapsedFirst.should.be.above(350);
        elapsedFirst.should.be.below(450);
        elapsedSecond.should.be.above(150);
        elapsedSecond.should.be.below(250);
        done();
      }, 200);
    }, 200);
  });

});
