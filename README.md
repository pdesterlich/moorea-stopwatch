# moorea-stopwatch

[![Dependency Status](https://david-dm.org/pdesterlich/moorea-stopwatch.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-stopwatch) [![devDependency Status](https://david-dm.org/pdesterlich/moorea-stopwatch/dev-status.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-stopwatch#info=devDependencies)

very simple stopwatch class for logging purposes

## Usage

```javascript
'use strict';

var
  stopWatch = require('moorea-stopwatch');

stopWatch.start();

// DoSomething(TM)

var elapsed = stopWatch.elapsed();
console.log('elapsed time: ' + elapsed + ' ms');
```

## API

`start()` start/restart the stopWatch

`elapsed()` return elapsed time in milliseconds
