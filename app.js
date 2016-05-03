const express = require('express');
const rotator = require('file-stream-rotator');
const fs = require('fs');
const morgan = require('morgan');

var auth = require('./app/routers/authenticate');
var docs = require('./app/routers/documents');
var search = require('./app/routers/search');

var app = express();
var logDir = __dirname + '/app/logs';

fs.existsSync(logDir) || fs.mkdirSync(logDir);
var logStream = rotator.getStream({
	date_format: 'YYYY-MM-DD',
	filename: logDir + '/access-%DATE%.log',
	frequency: 'daily',
	verbose: false
});

app.set('views', './app/views');
app.set('view engine', 'jade');

app.use(morgan('combined', {stream: logStream}))
app.use('/auth', auth);
app.use('/search', search);
app.use('/documents', docs);

app.get('/', (req, res) => {
	res.render('pages/index');
});

app.listen(9000, () => {
	console.log('Application listen on port 9000 ...');
});
