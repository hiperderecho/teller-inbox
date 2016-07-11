# Teller-inbox

Just a simple proxy for the Teller project, it receives the email data, parses it and calls the Teller endpoint.

For an example of the email data format check out the test file.

## Installation

```git clone``` the repo and ```npm install``` the dependencies.

Run the project with ```node index``` and make a ```POST``` request to ```/``` with valid data.

## Configuration

There is a ```config/index.js``` file where it is necessary to set the following values:
* ```onEmailUrl```: The URL that will be ```POST``` requested with the parsed data, this value defaults to ```http://localhost:5000/api/answers/```
* ```attachmentsPath```: The directory path where the ```POST``` files will be saved, this value defaults to ```../attachments/```
* ```maxFileSize```: The maximun file size in bytes for the saved files, this value defaults to ```~9.76Mbs```