var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
var config = require('../config.js');
const { checkToken } = require('../middleware.js');


/* GET users listing. */
router.get('/', checkToken, function(req, res, next) {
  let token = req.body.token;
  
return res.json({
  success: true,
  message: 'Token is valid'
});
});

module.exports = router;
