const Connection = require('mysql/lib/Connection');
var mysql = require('mysql2');
let learn = function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'api_learn',
        insecureAuth: true
    });
    return connection;
}
//  connection.connect();
//  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
// connection.end();
module.exports.localConnect = learn;
