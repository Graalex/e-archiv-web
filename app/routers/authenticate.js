
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Войдите в систему!');
});

router.post('/login', (req, res) => {
	console.log('Login ...');
});

router.post('/logout', (req, res) => {
	console.log('Logout ...');
});

module.exports = router;
