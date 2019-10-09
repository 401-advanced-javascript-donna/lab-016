const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

const unwindScores = {
  $unwind: {
    path: '$scores'
  }
};

const averageScore = {
  _id: '$scores.type',
  avgScore: {
    $avg: '$scores.score'
  }
};

const minScore = {
  _id: '$scores.type',
  minScore: {
    $min: '$scores.score'
  }
};

const maxScore = {
  _id: '$scores.type',
  maxScore: {
    $max: '$scores.score'
  }
};

schema.static('studentscores', function() {
  const pipeline = [
    unwindScores,
    averageScore,
    minScore,
    maxScore
  ];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Student', schema);