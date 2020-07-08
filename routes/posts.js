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
    .catch((err) => res.status(400).json({ msg: "couldn't save post" }));
});

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
