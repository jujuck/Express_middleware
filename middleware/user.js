const checkGender = (req, res, next) => {
  const { gender } = req.body;
  if (gender) {
    next();
  } else {
    res.status(404).send('Your request should contain a gender');
  }
}

module.exports = checkGender;