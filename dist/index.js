/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution logarithm of cumulative distribution function (CDF).
*
* @module @stdlib/stats-base-dists-discrete-uniform-logcdf
*
* @example
* var logcdf = require( '@stdlib/stats-base-dists-discrete-uniform-logcdf' );
*
* var y = logcdf( 3.0, 0, 4 );
* // returns ~-0.223
*
* var mylogcdf = logcdf.factory( 0, 10 );
* y = mylogcdf( 0.5 );
* // returns ~-2.398
*
* y = mylogcdf( 8.0 );
* // returns ~-0.201
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
