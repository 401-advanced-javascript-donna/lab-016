const express = require('express');
const app = express();
// Load model plugins
require('./models/register-plugins');

// MIDDLEWARE
const morgan = require('morgan');
const checkConnection = require('./middleware/check-connection');
if(process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(checkConnection());

// IS ALIVE TEST
app.get('/hello', (req, res) => res.send('yo, from lab-16'));

// API ROUTES
// const auth = require('./routes/auth');
// const grades = require('./routes/grades');
const zips = require('./routes/zips');
const students = require('./routes/students');
// const trades = require('./routes/trades');
// const books = require('./routes/books');
app.use('/api/zips', zips);
// app.use('/api/auth', auth);
// app.use('/api/grades', grades);
app.use('/api/students', students);
// app.use('/api/trades', trades);
// app.use('/api/books', books);



// NOT FOUND
const api404 = require('./middleware/api-404');
app.use('/api', api404);
// using express default 404 for non-api routes

// ERRORS
const errorHandler = require('./middleware/error-handler');
app.use(errorHandler);

module.exports = app;