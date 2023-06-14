const mongoose = require('mongoose')
require('dotenv').config

const uri = process.env.DB_URL

const connectToDatabase = async () => {
    try {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Database connected');
    } catch (error) {
      console.error('Failed to connect to database:', error);
    }
  };
  

module.exports = connectToDatabase