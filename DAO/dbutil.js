var mysql = require("mysql")

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "yyc102218",
  database: "school"
})

module.exports = connection


