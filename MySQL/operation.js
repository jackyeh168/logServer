var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'password',
  database : 'dataScience'
});
/*connection.connect(function(conn, cb) {
                conn.query('CREATE TABLE IF NOT EXISTS `used_record` ( 
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `course` varchar(64) NOT NULL,
  `version` varchar(16) NOT NULL,
  `type` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;', cb);
    }, cb);
*/
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
