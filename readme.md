# fuzzy-string-matching [![Build Status](https://travis-ci.org/elazzabi/fuzzy-string-matching.svg?branch=master)](https://travis-ci.org/elazzabi/fuzzy-string-matching)

> Get the degree of resemblance between two strings

## Install

```
$ npm install --save fuzzy-string-matching
```

## Usage

```js
const fsm = require('fuzzy-string-matching');

fsm('Abc', 'aBC'); // case sensitive = false
//=> 1

fsm('Abc', 'aBC', true); // case sensitive = true
//=> 0

fsm('abcdef', 'arcdet');
//=> 0.444444
```

## Testing

```
$ npm test
```

## License

MIT © [EL AZZABI Ahmed](http://elazzabi.com)
