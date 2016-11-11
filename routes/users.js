var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  const sum = foo(req,res);
  function foo(req,res){
    if (req.query.a &&  req.query.b){
      return +req.query.a + +req.query.b
    } else if (!req.query.a && !req.query.b){
      return 0
    }
    if (!req.query.b){
      return  +req.query.a
    } else if(!req.query.a){
      return  +req.query.b
    }
  }
  res.send(sum.toString());

});
module.exports = router;

