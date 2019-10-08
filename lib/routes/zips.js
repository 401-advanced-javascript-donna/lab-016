const router = require('express').Router();
const Zip = require('../models/zip');

router
  .get('/topten', (req, res, next) => {
    const limit = parseInt(req.query.limit || 10);
    Zip.topten(limit)
      .then(zip => res.json(zip))
      .catch(next);
  });