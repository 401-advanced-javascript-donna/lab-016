// eslint-disable-next-line new-cap
const router = require('express').Router();
const Zip = require('../models/zip');

router
  .get('/topten', (req, res, next) => {
    const limit = parseInt(req.query.limit || 10);
    Zip.topten(limit)
      .then(zips => res.json(zips))
      .catch(next);
  });

module.exports = router;