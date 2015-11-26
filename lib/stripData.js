module.exports = function ( body ) {
	var data = {};

	data.recipient = body.recipient;
	data.sender    = body.sender;
	data.subject   = body.subject;
	data.from      = body.from;
	data.dateISO   = body.Date;
	data.timestamp = body.timestamp;
	data.bodyPlain = body['body-plain'];
	data.bodyHtml  = body['body-html'];

	return data;
};