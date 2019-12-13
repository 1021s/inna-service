/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  // host: 'database',
  host: 'localhost',
  // host: 'localhost',
  // port: '3007',
  user: 'inna',
  password: 'thisisacoolpassword',
  database: 'photos',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log('Connected to mysql  to host database');
});

module.exports = connection;
