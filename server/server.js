const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


require('dotenv').load();

const PORT = process.env.PORT || 5000;
// DB configuration
const db = process.env.APP_MONGO_URI;

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Connect to MongoDB
 mongoose
  .connect(
    db,
    { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
 
// Basic server configuration
app.get('/', (req, res) => res.send("Hello World"));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
