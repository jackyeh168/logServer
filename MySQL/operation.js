var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'password',
  database : 'dataScience'
});

module.exports =  {
	insertRecord: function ( req ){
		connection.query('INSERT INTO used_record set ?', {
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
		connection.query('SELECT * from used_record order by id desc limit '+req.body.num, 
			callback
		);
	},
	
	getRecordsByUserId: function ( req, callback ){
		connection.query('SELECT * from used_record where user_id = "' + req.body.user_id + '"', 
			callback
		);
	},
}
