let jwt = require('jsonwebtoken');
let config = require('./config');

// module.exports = class HandlerGenerator {
//     login (req, res) {
//       let email = req.body.username;
//       let password = req.body.password;
//       // For the given username fetch user from DB
//       let mockedUsername = 'admin';
//       let mockedPassword = 'password';
  
//       if (email && password) {
//         if (email === mockedUsername && password === mockedPassword) {
//           let token = jwt.sign({username: username},
//             config.secret,
//             { expiresIn: '24h' // expires in 24 hours
//             }
//           );
//           // return the JWT token for the future API calls
//           res.json({
//             success: true,
//             message: 'Authentication successful!',
//             token: token
//           });
//         } else {
//           res.send(403).json({
//             success: false,
//             message: 'Incorrect username or password'
//           });
//         }
//       } else {
//         res.send(400).json({
//           success: false,
//           message: 'Authentication failed! Please check the request'
//         });
//       }
//     }
//     // index (req, res) {
//     //   res.json({
//     //     success: true,
//     //     message: 'Index page'
//     //   });
//     // }
//   }

  module.exports = function generateToken(email){
    // jwt.sign({email}, config.secret, { algorithm: 'HS384' }, function(err, token) {
    //   if(err){
    //     console.log(err)
    //   }else{
    //     return token;
    //   }
    // });
    let token = jwt.sign({email},
        config.secret,
        { expiresIn: '24h' // expire time
        }
      );
      // return the JWT token for the future API calls
      return token;
  }
