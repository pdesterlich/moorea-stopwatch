'use strict';

var stopWatch = function () {

  var timerStart;
};

stopWatch.prototype.start = function () {
  this.timerStart = process.hrtime();
};

stopWatch.prototype.elapsed = function () {
  var diff = process.hrtime(this.timerStart);
  return (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(3);
};

module.exports = new stopWatch();
