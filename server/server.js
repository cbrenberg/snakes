//requires
const express = require('express');
const snakeRouter = require('./routes/snake.router');
const bodyParser = require('body-parser');
const app = express();
//globals
const PORT = 5000;
//uses
app.use(express.static('/server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/snakes', snakeRouter);
//spin up server
app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
})

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

/* ----- MONGOOSE SCHEMA ----- */
const Schema = mongoose.Schema;

const snakeSchema = new Schema({
  species: { type: String, required: true, unique: true },
  venomous: { type: String, required: true }
});

const Snake = mongoose.model('Snake', snakeSchema); 

/* ----- FINDING AND CREATING ----- */
