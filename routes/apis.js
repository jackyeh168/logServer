var express = require('express');
var router = express.Router();
var sqlOperation = require('../MySQL/operation.js');


router.post('/status', function(req, res) {
	
	sqlOperation.insertRecord(req);
	res.json({ result: "1" });
});

module.exports = router;