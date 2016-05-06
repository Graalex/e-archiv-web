const exp = require('express');
const util = require('util');
const sql = require('mssql');
const conf = require('../../config');

var router = exp.Router();

router.get('/', (req, res) => {
	res.send('Display search form.');
});

//TODO: Change verb on POST
router.get('/ls/:ls', (req, res) => {
	var ls = req.params['ls'];
	if(!util.isNullOrUndefined(ls) && ls > 0) {
		sql.connect(conf.db.globus)
				.then(() => {
					new sql.Request()
							.input('Ls', sql.Int, ls)
							.execute('GZL_GetAbonentByLS')
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
	}
});

module.exports = router;
