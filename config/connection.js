let mysql = require("mysql");

let connection;
if(process.env.JAWSBD_URL){
  connection = mysql.createConnection(process.env.JAWSBD_URL);
} else{
  host: "localhost",
  port: 3306,
  user: "root",
  password: "M!sterT21",
  database: "burgers_db"
}
connection.connect(function(err){
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection; 