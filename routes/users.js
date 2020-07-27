const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const User = require('../models/user');
const jwtSecret = process.env.JWTSecret;

// @route post api/users
// @desc user registration, sends jwt to client
// @access Public
router.post(
  '/',
  [
    body('username').trim().isAlphanumeric(),
    body('email').isEmail().normalizeEmail(),
    body('password').trim().isAlphanumeric(),
  ],
  (req, res, next) => {
    let result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send(result);
    }
    const { username, email, password } = req.body;

    User.findOne({ email }).then((user) => {
      if (user) {
        const error = new Error('user already exists');
        error.status = 400;
        return next(error);
      }

      const newUser = new User({
        username,
        email,
        password,
      });

      bcrypt.genSalt(10, (saltErr, salt) => {
        if (saltErr) return next(saltErr);
        bcrypt.hash(password, salt, (hashErr, hash) => {
          if (hashErr) return next(hashErr);

          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              jwt.sign(
                {
                  id: user.id,
                },
                jwtSecret,
                { expiresIn: process.env.JWTExpire },
                (err, token) => {
                  if (err) return next(err);
                  return res.status(200).json({
                    token,
                    user: {
                      id: user.id,
                      name: user.username,
                      email: user.email,
                    },
                  });
                }
              );
            })
            .catch((err) => {
              return next(err);
            });
        });
      });
    });
  }
);

module.exports = router;
