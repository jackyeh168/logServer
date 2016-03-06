var mysql      = require('mysql');
var account    = require('./account.json')
var pool       = mysql.createPool(account);

module.exports =  {
	insertRecord: function ( req ){
		pool.query('INSERT INTO used_record set ?', {
			user_id: "" + req.body.user_id,
			course: req.body.course,
			version: req.body.version,
			type: req.body.type
		},function(err, rows, fields) {
		  if (err) //throw err;
			console.log('The err is: ', err);
		});
	},
	
	getManyRecords: function ( req, callback ){
		pool.query('SELECT * from used_record order by id desc limit '+req.body.num, 
			callback
		);
	},
	
	getRecordsByUserId: function ( req, callback ){
		pool.query('SELECT * from used_record where user_id = "' + req.body.user_id + '"', 
			callback
		);
	},
}
