/* ----- MONGOOSE CONNECTION ----- */
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/snakepit';
mongoose.connect(dbUrl, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to:', dbUrl);
});

mongoose.connection.on('error', (error) => {
  console.log('mongoose connection error:', error);
});