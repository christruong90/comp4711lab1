let mysql = require('mysql');

let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

con.connect(function(err) {
	if (err) throw err;
	console.log("connected");
	con.query("CREATE DATABASE testDB", function (err, result) {
		if (err) throw err;
		console.log("Database created");
	});
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });