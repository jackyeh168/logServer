var express = require('express');
var router = express.Router();
var sqlOperation = require('../MySQL/operation.js');

router.post('/status', function(req, res) {
	
	sqlOperation.insertRecord(req);
	res.json({ result: "1" });
});

router.post('/getManyRecords', function(req, res) {
	sqlOperation.getManyRecords(req, function(err, rows, fields) {
		if (err) //throw err;
			console.log('The err is: ', err);
		else{
			res.json(rows);
		}
	});
	
});

router.post('/getRecordsByUserId', function(req, res) {

	sqlOperation.getRecordsByUserId(req, function(err, rows, fields) {
		if (err) //throw err;
			console.log('The err is: ', err);
		else
			res.json(rows);
	})
});

module.exports = router;