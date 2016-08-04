# Gashlycrumb Tinies
![Gashlycrumb Tinies, by Edward Gorey](./zillah.jpg?raw=true)

Insert a little Gorey into your day, and your day will be better.

## Usage
There are two ways to use this.

### Line Generator
You can use this to generate the lines of the poem. Amy will follow
Zillah.

```javascript
var tinies = require('gashlycrumb').read();

tinies.next(); // "A is for AMY who fell down the stairs"
tinies.next(); // "B is for BASIL assaulted by bears"
```

### Connect-based handler
You can also drop in a handler for any connect-based frameworks, like
Restify or Express. Anything that uses a `(req, res, next)` signature.

```javascript
var gashlycrumb = require('gashlycrumb');
app.get('/gashlycrumb', gashlycrumb.handler());
```

## Info
Don't sue me, bro. Everyone should definitely purchase the wonderful book
by Edward Gorey. 


