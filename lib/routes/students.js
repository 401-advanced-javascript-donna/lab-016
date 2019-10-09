// eslint-disable-next-line new-cap
const router = require('express').Router();
const Student = require('../models/student');

router
  .get('/', (req, res, next) => {
    Student.find()
      .lean()
      .then(students => res.json(students))
      .catch(next);
  })

  .get('/studentscores', (req, res, next) => {
    Student.studentscores()
      .then(students => res.json(students))
      .catch(next);
  });


module.exports = router;