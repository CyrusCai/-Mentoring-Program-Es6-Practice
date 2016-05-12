var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/haha',function(req,res){
  console.log('Get new request');
  res.send('Hello world');
});

module.exports = router;