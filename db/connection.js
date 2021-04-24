//database connection
const connection = mysqlcreateConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:"password",//update this later
    database: "employee_DB"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });

  module.exports = connection;