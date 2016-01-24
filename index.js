/**
 * @description database
 * @module database
 */
var pg = require('pg')
/**
 * @description binds parameters and query to execute
 * @function executeQuery
 * @param {string} connection - connection string
 * @param {string} queryString - query to execute
 * @param {string[]} queryParameters - query parameters
 * @param {callback} callback - callback function
 * @since 1.0.0
 */
exports.executeQuery = function (connection, queryString, queryParameters, callback) {
  var handler = pgQuery.bind(undefined, queryString, queryParameters, function (result) {
    if (typeof callback !== 'undefined') callback(result)
    if (typeof queryParameters === 'function') queryParameters(result)
  })
  pg.connect(connection, handler)
}
/**
 * @description execute query and return result
 * @function pgQuery
 * @param {string} queryString - query to execute
 * @param {string[]} queryParameters - query parameters
 * @param {callback} callback - callback funtion
 * @since 1.0.0
 * @private
 */
function pgQuery (queryString, queryParameters, callback, error, client, done) {
  if (error) {
    callback(console.error('error fetching client from pool', error))
  }
  var results = []
  var query = (typeof queryParameters !== 'undefined')
    ? client.query(queryString, queryParameters) : client.query(queryString)
  query.on('row', function (row) {
    results.push(row)
  })
  query.on('end', function () {
    done()
    callback(results)
  })
  query.on('error', function (error) {
    done()
    callback(console.error('error running query', error))
  })
}
