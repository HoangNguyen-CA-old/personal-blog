const router = require('express').Router();

const authMW = require('../middleware/auth');

const Post = require('../models/post');

router.post('/', authMW, (req, res) => {
  const { title, tags, markDown, image } = req.body;

  const newPost = new Post({
    title,
    image,
    tags,
    markDown,
  });

  newPost
    .save()
    .then(() => {
      res.status(200).json({ msg: 'success' });
    })
    .catch((err) => res.status(400).json({ msg: "couldn't save post" }));
});

router.put('/:id', authMW, (req, res) => {
  const { title, tags, markDown, image } = req.body;
  if (title == null || tags == null || markDown == null || image == null) {
    return res.status(400).json({ msg: 'information missing' });
  }
  Post.findByIdAndUpdate(req.params.id, { markDown, title, tags, image })
    .then(() => {
      return res.json({ msg: 'success' });
    })
    .catch(() => {
      return res.json({ msg: "couldn't update post" });
    });
});

router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ msg: 'success' });
    })
    .catch(() => {
      res.status(400).json({ msg: "couldn't delete post" });
    });
});

router.get('/', async (req, res) => {
  const posts = await Post.find({}, '-markDown');
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
