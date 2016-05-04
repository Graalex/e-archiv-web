const exp = require('express');
var router = exp.Router();

router.get('/', (req, res) => {
	res.send('Display search form.');
});

router.post('/', (req, res) => {
	res.send('Search by LS.');
});

module.exports = router;
