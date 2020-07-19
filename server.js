const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(express.json());

const db = process.env.MONGODB_URI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('connected to mongodb'))
  .catch((err) => console.log(err));

app.use('/posts', require('./routes/posts'));

//serve index.html if in production

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
