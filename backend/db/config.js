const mongoose = require('mongoose');

// Connection configuration
const url = 'mongodb://localhost:27017/e-commerce';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Adjust this to increase the timeout
  socketTimeoutMS: 45000, // Adjust this to increase the socket timeout
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Export the connection to use in other files
module.exports = mongoose.connection;
