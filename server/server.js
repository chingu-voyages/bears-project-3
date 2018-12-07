const express = require('express');
const mongoose = require('mongoose');

require('dotenv').load();

const PORT = process.env.PORT || 5000;
// DB configuration
const db = process.env.APP_MONGO_URI;

const app = express();
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Basic server configuration
app.get('/', (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
