const express = require('express');
const router = express.Router();
const Snake = require('../models/snake.model')
/* ----- FINDING AND CREATING ----- */
router.get('/', (req, res) => {
  console.log('/snakes GET hit')
  Snake.find({}).then((results) => {
    res.send(results)
  }).catch((error) => {
    console.log('Error finding books:', error);
    res.sendStatus(500);
  });
})

module.exports = router;