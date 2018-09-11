//requires
const express = require('express');
const snakeRouter = require('./routes/snake.router');
const bodyParser = require('body-parser');
const app = express();
require('./modules/database-connection')
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