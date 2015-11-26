var rp        = require('request-promise');
var stripData = require('./stripData');
var config    = require('../config');

module.exports = function ( request, response ) {
	var body = request.body;
	var data;

	data = stripData( body );

	rp.post( config.onEmailUrl, data )
	.then( function ( response ) {
		console.log( 'response', response );
	} )
	.catch( function ( error ) {
		console.error( error, error.stack );
	} );

	response.status( 200 ).end();
};