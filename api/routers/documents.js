const exp = require('express');
const util = require('util');
const sql = require('mssql');

var router = exp.Router();

router.get('/', (req, res) => {
	res.send('TODO: Render page all documents.')
});

router.get('/class/:id', (req, res) => {
	res.send('Display  documents via class ' + req.params['id'])
});

router.get('/type/:id', (req, res) => {
	res.send('Display all documents via type ' + req.params['id'])
});

router.get('/class/:classID/type/:typeID', (req, res) => {
	res.send('Display documents class ' + req.params['classID'] + ' and type ' + req.params['typeID']);
})

router.get('/ls/:id', (req, res) => {
	var ls = req.params['id'];
	if(!util.isNullOrUndefined(ls) && ls > 0) {
		sql.connect('mssql://ARCHIV_APP:ARCHIV_APP@192.168.0.168/Archiv')
				.then(() => {
					new sql.Request()
							.input('LS', sql.Int, ls)
							.input('Kind', sql.Int, -1)
							.execute('GetDocByLS')
							.then((rec) => {
								res.send(rec);
							})
							.catch((err) => {
								res.send(err);
							})
				})
				.catch((err) => {
					res.send(err);
			});
	} else {
		//TODO: Change on render error page
		res.send('Не указан или неправильный лицевой счет!');
	}
});

router.get('/:id', (req, res) => {
	res.send('Display one document id: ' + req.params['id'])
});

router.post('/search', (req, res) => {
	res.send('Search abonents!');
});

module.exports = router;
