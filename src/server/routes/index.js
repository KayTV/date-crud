var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');
function Dates() {
  return knex('dates');
}

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      res.json({title: 'Error', errors: ['Email and/or password incorrect']})
    } else {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        } else {
          return res.json({status: 'login', user: user});
        }
      });
    }
  })(req, res, next);
});

router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  knex('users').where('email', email)
    .then(function(data){
      // if email is in the database send an error
      if(data.length) {
        res.json({title: 'Error', errors: ['Email already exists']})
      } else {
        // hash and salt the password
        var hashedPassword = helpers.hashing(password);
        // if email is not in the database insert it
        knex('users').insert({
          email: email,
          password: hashedPassword
        })
        .then(function(data) {
          res.json({message: 'successfully registered, please login!', status: 200})
        })
        .catch(function(err) {
          return res.json('crap');
        });
      }
    })
    .catch(function(err){
      return next(err);
    });
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.status(200).json({status: 'Bye'});
});

router.post('/date', function(req, res, next) {
  console.log('hitting /date');
  console.log(req.body);
  Dates().insert({
    firstname: req.body.date.names.firstName,
    lastname: req.body.date.names.lastName,
    username: req.body.date.username,
    email: req.body.date.email,
    phone: req.body.date.phone,
    avatar: req.body.date.avatar,
    user_id: 1
  }, 'id').then(function(result){
    res.json({
      status: 200,
      message: 'Succesfully saved '+req.body.date
    });
  })
  .catch(function(err){
    console.log('errorrrrrrrrrr', err)
  })
})

router.get('/profile', function(req, res, next) {
  Dates().select()
  .then(function(dates){
    res.json(dates);
  })
})

module.exports = router;
