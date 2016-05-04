/**
 * Основной скрипт сервера
 */
const express = require('express');
const rotator = require('file-stream-rotator');
const fs = require('fs');
const morgan = require('morgan');

var conf = require('./config');
var auth = require('./api/routers/authenticate');
var docs = require('./api/routers/documents');
var search = require('./api/routers/search');

var app = express();
var logDir = __dirname + '/api/logs';

fs.existsSync(logDir) || fs.mkdirSync(logDir);
var logStream = rotator.getStream({
	date_format: 'YYYY-MM-DD',
	filename: logDir + '/access-%DATE%.log',
	frequency: 'daily',
	verbose: false
});

app.use(morgan('combined', {stream: logStream}))
app.use('/auth', auth);
app.use('/search', search);
app.use('/documents', docs);

//TODO: Отображение домашней страницы
/*
app.get('/', (req, res) => {
	res.render('pages/index');
});
*/

var port = conf.server.listenPort || 9000;
app.listen(port, () => {
	console.log('Earchiv server start at port ' + port);
});
