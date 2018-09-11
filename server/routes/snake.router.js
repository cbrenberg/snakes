const express = require('express');
const router = express.Router();


router.get('/snakes', (req, res) => {
  console.log('/snakes GET hit')
  Snake.find({}).then((results) => {
    res.send(results)
  }).catch((error) => {
    console.log('Error finding books:', error);
  });
})

module.exports = router;