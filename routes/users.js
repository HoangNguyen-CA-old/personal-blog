const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const authMW = require('../middleware/auth');

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
    body('role').trim().isAlphanumeric(),
  ],
  authMW,
  async (req, res, next) => {
    let result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send(result);
    }

    const { username, email, password, role } = req.body;

    try {
      //check if user is permitted to register another user
      const admin = await User.findById(req.user.id);
      if (admin.role !== 'admin') {
        const error = new Error('user not authorized');
        error.status = 403;
        return next(error);
      }

      //Check if user exists, then register user
      let user = await User.findOne({ email });

      if (user) {
        const error = new Error('user already exists');
        error.status = 400;
        return next(error);
      }

      const newUser = new User({
        username,
        email,
        password,
        role,
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
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
