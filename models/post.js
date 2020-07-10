const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  tags: { type: [String] },
  markDown: { type: String, required: true },
});

module.exports = mongoose.model('post', postSchema);
