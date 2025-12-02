const mongoose = require('mongoose');
const logger = require('../utils/logger');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ticket-tracker';

async function connectDB() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logger.info('Connected to MongoDB');
}

module.exports = { connectDB };