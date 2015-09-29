# moorea-stopwatch

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
