// eslint-disable-next-line new-cap
const router = require('express').Router();
const Zip = require('../models/zip');

router
  .get('/topten', (req, res, next) => {
    const limit = parseInt(req.query.limit || 10);
    Zip.topTen(limit)
      .then(zip => res.json(zip))
      .catch(next);
  });

module.exports = router;