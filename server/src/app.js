const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const ticketsRouter = require('./routes/tickets');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/tickets', ticketsRouter);

app.use((req, res) => res.status(404).json({ message: 'Not Found' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

module.exports = app;