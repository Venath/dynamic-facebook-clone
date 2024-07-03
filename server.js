const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/facebookClone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to the database");
}).catch((err) => {
  console.log("Error", err);
});

const postRoutes = require('./route/postRoute'); // Correct path to postRoute

app.use(postRoutes); // Use the routes with a prefix

app.listen(process.env.PORT || 8000, () => {
  console.log('Server started on port 8000');
});
