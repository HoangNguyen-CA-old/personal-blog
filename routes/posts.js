const router = require('express').Router();

const Post = require('../models/post');

router.post('/', (req, res) => {
  const { title, tags, html } = req.body;

  const newPost = new Post({
    title,
    tags,
    html,
  });

  newPost
    .save()
    .then(() => {
      res.status(200).json({ msg: 'success' });
    })
    .catch((err) => res.status(400).json({ msg: "could'nt save post" }));
});

router.get('/test', (req, res) => {
  res.send('working');
});

module.exports = router;
