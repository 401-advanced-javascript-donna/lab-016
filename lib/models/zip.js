const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

const limitToTop = limit => ({
  $limit: limit
});

schema.static('topten', function(limit) {
  const pipeline = [{
    $group: {
      _id: '$state',
      totalPop: {
        $sum: '$pop'
      }
    }
  }, {
    $sort: {
      totalPop: -1
    }
  }, limitToTop(limit)];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Zip', schema);