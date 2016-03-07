var mysql      = require('mysql');


DATABASE_POOL_CONFIG = {
	    waitForConnections: true,
	    queueLimit: 0,
	    connectionLimit: 20,
	    host: '127.0.0.1',
	    user: 'root',
	    password: 'password',
	    database: 'dataScience',
	    socketPath: '/var/run/mysqld/mysqld.sock'
	};
	
var dbPool = mysql.createPool(DATABASE_POOL_CONFIG);
module.exports =  {
	insertRecord: function ( req ){
		try {
			dbPool.getConnection(function(err,connection){
				if(err) {
					console.log('dbPool.getConnection error: : ', err);
				}
				else{
					connection.query('INSERT INTO used_record set ?', {
						user_id: "" + req.body.user_id,
						course: req.body.course,
						version: req.body.version,
						type: req.body.type
					},function(err, rows, fields) {
					  if (err) //throw err;
						console.log('INSERT error: ', err);
					});
				}
			});
		} catch (err) {
			console.log(err);
			return;
		}
	},
	
	getManyRecords: function ( req, callback ){
		try {
			dbPool.getConnection(function(err,connection){
				if(err) {
					console.log('dbPool.getConnection error: : ', err);
				}
				else{
					connection.query('SELECT * from used_record order by id desc limit '+req.body.num, 
						callback
					);
				}
			});
		} catch (err) {
			console.log(err);
			return;
		}
	},
	
	getRecordsByUserId: function ( req, callback ){
		try {
			dbPool.getConnection(function(err,connection){
				if(err) {
					console.log('dbPool.getConnection error: : ', err);
				}
				else{
					connection.query('SELECT * from used_record where user_id = "' + req.body.user_id + '"', 
						callback
					);
				}
			});
		} catch (err) {
			console.log(err);
			return;
		}
	},
}
