const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  tags: { type: [String] },
  html: { type: String, required: true },
});

module.exports = mongoose.model('post', postSchema);
