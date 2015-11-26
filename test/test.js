var assert = require( 'assert' );

var emailRawObject = { recipient: 'recipient@email.com',
sender: 'some.sender@email.com',
subject: 'hello',
from: 'Some Sender <some.sender@email.com>',
'X-Mailgun-Incoming': 'Yes',
'X-Envelope-From': '<some.sender@gmail.com>',
Received: 
 [ 'from mail-qk0-f171.google.com (mail-qk0-f171.google.com [209.85.220.171]) by mxa.mailgun.org with ESMTP id 56463054.7ffbf01c68b0-in06; Fri, 13 Nov 2015 18:47:48 -0000 (UTC)',
   'by qkao63 with SMTP id o63so56316258qka.2        for <recipient@email.com>; Fri, 13 Nov 2015 10:47:48 -0800 (PST)' ],
'Dkim-Signature': 'v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20120113;        h=mime-version:from:date:message-id:subject:to:content-type;        bh=PxvCRFjoREQBlbEsFeGm8dOgrropI/r37W8Hf/QAjmg=;        b=WktKE8XSB/elS03C637nTtPeZ51EfC29JaF1aX+uIJm7Pzb308SDleh2ozv8L/anbE         xGN5sGDyV20pWqLuxAtBfbkryierFjt3+0AmaAWqcNY9tybf8VgTJvbhKt73l/O6IwoR         wcup7GFJKOGbC5UpjGKniHv6t8MlvPIZa+cG/ZsldCYOwvVmBMpvmzdB2AqhOtPP870k         ztG9tJCfLbuRl3ow2JBLrNu/l3XWKBPslFOrwmiF+KibLpysi2XhKYdfXKsCw4aDyWuR         3V8N0kWt3YN9LjlPfl4E6+RR0EoqBVBS2sNVgAcfQsUcn0TnVqs7idwS5I4gfzw4kZh5         O7Rw==',
'X-Received': 'by 10.55.73.207 with SMTP id w198mr23780177qka.27.1447440467823; Fri, 13 Nov 2015 10:47:47 -0800 (PST)',
'Mime-Version': '1.0',
From: 'Some Sender <some.sender@email.com>',
Date: 'Fri, 13 Nov 2015 18:47:37 +0000',
'Message-Id': '<CADMjphyHw-fKR=FceJfrv0RMnmUz6G-Uxw2uhNA0_iQedPc2MQ@mail.gmail.com>',
Subject: 'hola',
To: 'recipient@email.com',
'Content-Type': 'multipart/alternative; boundary="001a114a9cbceb16fe0524707eac"',
'message-headers': '[["X-Mailgun-Incoming", "Yes"], ["X-Envelope-From", "<some.sender@gmail.com>"], ["Received", "from mail-qk0-f171.google.com (mail-qk0-f171.google.com [209.85.220.171]) by mxa.mailgun.org with ESMTP id 56463054.7ffbf01c68b0-in06; Fri, 13 Nov 2015 18:47:48 -0000 (UTC)"], ["Received", "by qkao63 with SMTP id o63so56316258qka.2        for <recipient@email.com>; Fri, 13 Nov 2015 10:47:48 -0800 (PST)"], ["Dkim-Signature", "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20120113;        h=mime-version:from:date:message-id:subject:to:content-type;        bh=PxvCRFjoREQBlbEsFeGm8dOgrropI/r37W8Hf/QAjmg=;        b=WktKE8XSB/elS03C637nTtPeZ51EfC29JaF1aX+uIJm7Pzb308SDleh2ozv8L/anbE         xGN5sGDyV20pWqLuxAtBfbkryierFjt3+0AmaAWqcNY9tybf8VgTJvbhKt73l/O6IwoR         wcup7GFJKOGbC5UpjGKniHv6t8MlvPIZa+cG/ZsldCYOwvVmBMpvmzdB2AqhOtPP870k         ztG9tJCfLbuRl3ow2JBLrNu/l3XWKBPslFOrwmiF+KibLpysi2XhKYdfXKsCw4aDyWuR         3V8N0kWt3YN9LjlPfl4E6+RR0EoqBVBS2sNVgAcfQsUcn0TnVqs7idwS5I4gfzw4kZh5         O7Rw=="], ["X-Received", "by 10.55.73.207 with SMTP id w198mr23780177qka.27.1447440467823; Fri, 13 Nov 2015 10:47:47 -0800 (PST)"], ["Mime-Version", "1.0"], ["From", "Some Sender <some.sender@email.com>"], ["Date", "Fri, 13 Nov 2015 18:47:37 +0000"], ["Message-Id", "<CADMjphyHw-fKR=FceJfrv0RMnmUz6G-Uxw2uhNA0_iQedPc2MQ@mail.gmail.com>"], ["Subject", "hola"], ["To", "recipient@email.com"], ["Content-Type", "multipart/alternative; boundary=\\"001a114a9cbceb16fe0524707eac\\""]]',
timestamp: '1447440470',
token: 'cd3a8e82241b7bc8c41b04360e89a12b7c7493ee4604eac418',
signature: 'cea5e678c687fd57f96cbd34792c9d74b02548b5318cb012633ea58624ecbde7',
'body-plain': 'este es un test\r\ndel envio de correos\r\n\r\nsaludos\r\n',
'body-html': '<div dir="ltr">este es un test<div>del envio de correos</div><div><br></div><div>saludos</div></div>\r\n',
'stripped-html': '<div dir="ltr">este es un test<div>del envio de correos</div><div><br></div><div>saludos</div></div>\r\n',
'stripped-text': 'este es un test\r\ndel envio de correos\r\n\r\nsaludos',
'stripped-signature': '' };

describe( 'Lib', function () {
	describe( '#stripData', function () {
		var stripData = require('../lib/stripData');
		var data      = stripData( emailRawObject );

		it('should strip Data accoringly', function () {
			assert.equal( data.recipient, 'recipient@email.com' );
			assert.equal( data.sender   , 'some.sender@email.com' );
			assert.equal( data.subject  , 'hello' );
			assert.equal( data.from     , 'Some Sender <some.sender@email.com>' );
			assert.equal( data.dateISO  , 'Fri, 13 Nov 2015 18:47:37 +0000');
			assert.equal( data.timestamp, '1447440470');
			assert.equal( data.bodyPlain, 'este es un test\r\ndel envio de correos\r\n\r\nsaludos\r\n');
			assert.equal( data.bodyHtml , '<div dir="ltr">este es un test<div>del envio de correos</div><div><br></div><div>saludos</div></div>\r\n');
		} );
	} );
} );