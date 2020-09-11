var express = require('express');
var router = express.Router();
var generateToken = require('../handler');

/* GET home page. */
router.post('/', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
 
  let mockedUsername = 'admin';
  let mockedPassword = 'password';

  if (email && password) {
    if (email === mockedUsername && password === mockedPassword) {
        let token = generateToken(email);
        return res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
    
      } else {
        return res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
    return  res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
});

module.exports = router;
