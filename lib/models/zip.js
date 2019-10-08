const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

const limitToTop = limit => ({
  $limit: limit
});

schema.static('topTen', function(limit) {
  const pipeline = [{
    $group: {
      _id: '$state',
      pop: {
        $sum: '$pop'
      }
    }
  }, {
    $sort: {
      pop: -1
    }
  }, limitToTop(limit)];

  return this.aggregate(pipeline);
});

module.exports = ('Zip', schema);