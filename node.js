const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const username= process.env.Db_username;
const password= process.env.Db_password;

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: username,
    password: password,
    database: "malea"
  });
  
  app.get('/data', (req, res) => {
    con.query('SELECT * FROM designs', (err, results) => {
      if (err) throw err;
    res.json(results);});
  });
  const path = require('path');

// Serve static files (CSS, JS, Images, etc.)
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
