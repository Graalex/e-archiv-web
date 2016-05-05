const exp = require('express');
const sql = require('mssql');

var router = exp.Router();

// route GET http://earchiv/classes/
router.get('/', (req, res) => {
	sql.connect('mssql://ARCHIV_APP:ARCHIV_APP@192.168.0.168/Archiv')

	.then(() => {
		new sql.Request()
			.execute('DocClassGetAll')
			.then(rec => {
				res.send(rec);
			})
			.catch(err => {
				res.send(err);
			});
	})

	.catch(err => {
		res.send(err);
	});
});

// route GET http://earchiv/classes/1
router.get('/:id', (req, res) => {
	const id = req.params['id'];
	sql.connect('mssql://ARCHIV_APP:ARCHIV_APP@192.168.0.168/Archiv')
	.then(() => {
		new sql.Request()
			.query(`select * from DocClass where Ukey = ${id}`)
			.then(rec => {
				res.send(rec);
			})
			.catch(err => {
				res.send(err);
			});
	})
	.catch(err => {
		res.send(err);
	});
});

module.exports = router;
