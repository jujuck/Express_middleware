const express = require('express');
const port = 5000;
const app = express();
const users = require('./data/users.js');

app.use(express.json());

app.get('/one', (req, res) => {
  console.log('Get is working');
  const random = Math.floor(Math.random() * 1000) + 1;
  res.send({ id: users[random].id, firstname: users[random].first_name, lastname: users[random].last_name });
});

/** Your code below */

app.listen(port, () => console.log('Server is running correctly or not'))