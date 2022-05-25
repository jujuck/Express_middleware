const express = require('express');
const port = 5000;
const app = express();
const users = require('./data/users.js');
const checkGender = require('./middleware/user.js');

app.use(express.json());

app.get('/one', (req, res) => {
  console.log('Get is working');
  const random = Math.floor(Math.random() * 1000) + 1;
  res.send({ id: users[random].id, firstname: users[random].first_name, lastname: users[random].last_name });
});

/** Your code below */
app.post('/one/:id', checkGender, (req, res) => {
  const myUser = users.filter(user => user.id === parseInt(req.params.id))[0];
  if (req.body.gender.toUpperCase() === myUser.gender.toUpperCase()) {
    res.status(202).send(myUser);
  } else {
    res.status(404).send('Gender is incorrect, try again')
  }
})

app.listen(port, () => console.log('Server is running correctly or not'))