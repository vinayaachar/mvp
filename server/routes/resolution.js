const router = require('express').Router();
let Resolution = require('../models/resolution.model');

//get method to /user/
router.route('/').get((req, res) => {
  Resolution.find()
    .then(resolutions => res.json(resolutions))
    .catch(err => res.sendStatus(400).json('Error: ' + err));
});

//add resolutions using post
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newResolution = new Resolution({
    username,
    description,
    duration,
    date,
  });

  newResolution.save()
    .then(() => res.json('Resolution added!'))
    .catch(err => res.sendStatus(400).json('Error: ' + err));
});

//get a resolution by ID
router.route('/:id').get((req, res) => {
  Resolution.findById(req.params.id)
    .then(resolution => res.json(resolution))
    .catch(err => res.sendStatus(400).json('Error: ' + err));
})

//Delete a resolution By ID
router.route('/:id').delete((req, res) => {
  Resolution.findByIdAndDelete(req.params.id)
    .then(() => res.json('Resolution Deleted'))
    .catch(err => res.sendStatus(400).json('Error: ' + err));
})

//Update a resolution by ID
router.route('/update/:id').post((req, res) => {
  Resolution.findById(req.params.id)
    .then(resolution => {
      resolution.username = req.body.username;
      resolution.description = req.body.description;
      resolution.duration = Number(req.body.duration);
      resolution.date = Date.parse(req.body.date);

      resolution.save()
        .then(() => res.json('Resolution Updated!'))
        .catch(err => res.sendStatus(400).json('Error: ' + err));
    })
    .catch(err => res.sendStatus(400).json('Error: ' + err));
});

module.exports = router;