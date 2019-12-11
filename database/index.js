/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'host.docker.internal',
  // host: 'localhost',
  user: 'root',
  database: 'photos',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }

  console.log('Connected to mysql');
});

module.exports = connection;
