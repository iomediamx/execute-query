# pg-execute-query
Async parameters binding and query execution using pg.

[![Build Status](https://travis-ci.org/iomediamx/pg-execute-query.svg?branch=master)](https://travis-ci.org/iomediamx/pg-execute-query)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install
```sh
$ npm install pg-execute-query
```

## Usage
```javascript
var execute = require('pg-execute-query')
```

## Examples

```javascript
var execute = require('pg-execute-query')
var connection = process.env.DATABASE_URL
var queryString = 'select $1::int as num'
var queryParameters = ['1']
execute.executeQuery(connection, queryString, queryParameters, callback)
function callback (err, res) {
  if (err) {
    console.error(err)
  } else {
    console.log(res[0].num)
    // 1
  }
}
```
The queryParameters and the callback are optional

```javascript
var execute = require('pg-execute-query')
var connection = process.env.DATABASE_URL
var queryString = 'select 1::int as num'
execute.executeQuery(connection, queryString, callback)
function callback (err, res) {
  if (err) {
    console.error(err)
  } else {
    console.log(res[0].num)
    // 1
  }
}
```
```javascript
var execute = require('pg-execute-query')
var connection = process.env.DATABASE_URL
var queryString = 'select $1::int as num'
var queryParameters = ['1']
execute.executeQuery(connection, queryString, queryParameters)
// nothing
```
```javascript
var execute = require('pg-execute-query')
var connection = process.env.DATABASE_URL
var queryString = 'select 1::int as num'
execute.executeQuery(connection, queryString)
// nothing
```

## License
Copyright (c) 2016 io media, S.A. de C.V.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
