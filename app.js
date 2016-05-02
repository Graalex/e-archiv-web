const http = require('http');

http.createServer((request, responce) => {
	responce.writeHead(200, {'Content-Type': 'text/plain'});
	responce.end('Добро пожаловать в электронный архив ПАО Мариупольгаз!\n');
}).listen(80);

console.log('Server running at 80 port...');
