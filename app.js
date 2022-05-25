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
app.post('/one/:id', (req, res) => {
  console.log('route post ok');
  if (req.body.gender) {
    res.status(201).json(users.filter(user => user.id === parseInt(req.params.id))[0]);
  } else {
    res.status(404).send('Should contain a gender');
  }
})

app.listen(port, () => console.log('Server is running correctly or not'))