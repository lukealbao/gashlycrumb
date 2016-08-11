'use strict';

var lines = require(__dirname + '/lines');
var max = lines.length - 1;

function lineFactory () {
  function closure () {
    var i = 0;    
    function oneLine () {
      var nextLine = lines[i];
      if (++i > max) i = 0;
      return nextLine;
    }    
    return oneLine;
  }

  return {
    next: closure()
  };
}

function handlerFactory () {
  var tinies = lineFactory();
  function noop () {}
  function gashlycrumbTiniesHandler (req, res, next) {
    if (typeof next !== 'function') next = noop;
    var line = tinies.next() + '\n';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', line.length);
    res.statusCode = 200;
    res.end(line);

    return next();
  }
  return gashlycrumbTiniesHandler;
}

module.exports = {
  read: lineFactory,
  handler: handlerFactory
};
