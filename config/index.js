module.exports =
{ onEmailUrl      : process.env.TELLER_ON_EMAIL_URL     || 'http://localhost:5000/api/answers/'
, attachmentsPath : process.env.TELLER_ATTACHMENTS_PATH || '../attachments/'
, maxFileSize     : 10 * 10 * 10 * 1024
};