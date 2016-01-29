var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'YourPassword',
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
}