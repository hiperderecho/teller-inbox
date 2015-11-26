module.exports = function () {
	var isDevEnv = process.env.TELLER_DEV_ENV === 'true';

	return { onEmailUrl : isDevEnv ? 'http://localhost:5000/inbox' : process.env.TELLER_ON_EMAIL_URL };
};