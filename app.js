const express = require('express');
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Sara0530$', 
  database: 'aptitude'
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
  
  // Create Express app
  const app = express();
  
  // Middleware to parse JSON bodies
  app.use(express.json());
  
  // Start the Express server
  const PORT = 3306;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  
  
   // GET table ticker="AAPL"
  app.get('/aptitude/Assessment', (req, res) => {
    connection.query('SELECT * FROM Assessment WHERE ticker="AAPL"', (err, results) => {
      if (err) {
        console.error('Error fetching Assessment:', err);
        res.status(500);
        res.send('Error fetching Assessment');
        return;
      }
      res.json(results);
    });
  });

  // GET table ticker="AAPL"
  
  app.get('/aptitude/Assessment', (req, res) => {
    connection.query('SELECT ticker, date, revenue, gp FROM Assessment WHERE ticker="AAPL"', (err, results) => {
      if (err) {
        console.error('Error fetching Assessment:', err);
        res.status(500);
        res.send('Error fetching Assessment');
        return;
      }
      res.json(results);
    });
  });

  app.get('/aptitude/Assessment/ticker', (req, res) => {
    connection.query('SELECT ticker, date, revenue, gp FROM Assessment WHERE ticker="AAPL" LIMIT 5, OFSET 5, ORDER BY date DESC', (err, results) => {
      if (err) {
        console.error('Error fetching Assessment:', err);
        res.status(500);
        res.send('Error fetching Assessment');
        return;
      }
      res.json(results);
    });
  });
  
  app.get('/aptitude/Assessment/ticker', (req, res) => {
    connection.query('SELECT ticker, date, revenue, gp FROM Assessment WHERE ticker="ZNGA" LIMIT 5, OFSET 5, ORDER BY DESC', (err, results) => {
      if (err) {
        console.error('Error fetching Assessment:', err);
        res.status(500);
        res.send('Error fetching Assessment');
        return;
      }
      res.json(results);
    });
  });
