const express = require('express');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(express.json());

const db = process.env.MONGODB_URI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to mongodb'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
