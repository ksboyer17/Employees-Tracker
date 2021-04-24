const util = require('util');
require('dotenv').config();
const mysql = require ('mysql');

//database connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  connection.query = util.promisify(connection.query);

  module.exports = connection;