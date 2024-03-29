const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authMW = require('../middleware/auth');
const User = require('../models/user');

const jwtSecret = process.env.JWTSecret;
const tokenExpiry = process.env.JWTExpire;

// @route post /api/auth
// @desc attempts user login and sends back jwt
// @access Public
router.post('/', (req, res, next) => {
  let { email, password } = req.body;
  console.log(req.body);

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        const error = new Error('user does not exist');
        error.status = 400;
        return next(error);
      }
      //validate password
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          const error = new Error('invalid password');
          error.status = 400;
          return next(error);
        }
        jwt.sign(
          {
            id: user.id,
            role: user.role,
          },
          jwtSecret,
          { expiresIn: tokenExpiry },
          (err, token) => {
            if (err) return next(err);
            res.json({
              token: token,
              user: {
                id: user.id,
                username: user.username,
                email: user.email,
              },
            });
          }
        );
      });
    })
    .catch((err) => next(err));
});

// @route get api/auth/
// @desc user login, sends back jwt
// @access Public
router.get('/user', authMW, (req, res, next) => {
  const user = req.user;
  User.findById(user.id)
    .select('-password')
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;
