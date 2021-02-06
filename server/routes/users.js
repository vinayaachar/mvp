const router = require('express').Router();
let User = require('../models/user.model');

//get method to /user/
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.sendStatus(400).json('Error: ' + err));
});

//add user using post
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username}); // create a new user

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.sendStatus(400).json('Error: ' + err));
});

module.exports = router;