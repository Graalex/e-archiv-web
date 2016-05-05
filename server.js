/**
 * Основной скрипт сервера
 */
const express = require('express');
const rotator = require('file-stream-rotator');
const fs = require('fs');
const morgan = require('morgan');

//var conf = require('./config');
var auth = require('./api/routers/authenticate');
var docs = require('./api/routers/documents');
var search = require('./api/routers/search');
const classes = require('./api/routers/classes');

var app = express();
app.config = require('./config');
var logDir = __dirname + '/api/logs';

fs.existsSync(logDir) || fs.mkdirSync(logDir);
var logStream = rotator.getStream({
	date_format: 'YYYY-MM-DD',
	filename: logDir + '/access-%DATE%.log',
	frequency: 'daily',
	verbose: false
});

app.use(morgan('combined', {stream: logStream}));
app.use('/classes', classes);
app.use('/auth', auth);
app.use('/search', search);
app.use('/documents', docs);

var port = app.config.server.listenPort || 9000;
app.listen(port, () => {
	console.log('Earchiv server start at port ' + port);
});

module.exports = app;
