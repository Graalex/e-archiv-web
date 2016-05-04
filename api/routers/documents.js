const exp = require('express');
var router = exp.Router();

router.get('/', (req, res) => {
	res.send([
		{
			"id": 1,
			"name": "name-MDF-235",
			"size": 201458
		},
		{
			"id": 2,
			"name": "name-MDF-200",
			"size": 201287
		}
	])
});

router.get('/class/:id', (req, res) => {
	res.send('Display  documents via class ' + req.params['id']);
});

router.get('/type/:id', (req, res) => {
	res.send('Display all documents via type ' + req.params['id']);
});

router.get('/class/:classID/type/:typeID', (req, res) => {
	res.send('Display documents class ' + req.params['classID'] + ' and type ' + req.params['typeID']);
});

router.get('/ls/:id', (req, res) => {
	res.send('Display documents via ls ' + req.params['id']);
});

router.get('/:id', (req, res) => {
	res.send('Display one document id: ' + req.params['id']);
});

router.post('/search', (req, res) => {
	res.send('Search abonents!');
});

module.exports = router;
