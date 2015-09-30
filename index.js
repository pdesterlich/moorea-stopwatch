'use strict';

var StopWatch = function () {

  this.timerStart = process.hrtime();
};

StopWatch.prototype.start = function () {
  this.timerStart = process.hrtime();
};

StopWatch.prototype.elapsed = function () {
  var diff = process.hrtime(this.timerStart);
  return (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(3);
};

module.exports = StopWatch;
