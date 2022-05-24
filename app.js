const express = require('express');
const port = 5000;
const app = express();
const users = require('./data/users.js');

app.use(express.json())

app.get('/', (req, res) => {
  console.log('Get is working');
  res.send('Hello World');
});

/** Your code below */


app.listen(port, () => console.log('Server is running correctly or not'))