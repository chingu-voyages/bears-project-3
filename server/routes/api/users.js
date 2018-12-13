const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').load();

const key = process.env.secret;
// Load the user model
const User = require('../../models/User');


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Users Route Works'}));

// @route   GET api/users/register
// @desc    Register a user
// @access  Public
router.post('/register', (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        // Check if user exsits. 
        if(user){
            return res.status(400).json({email: 'Email Already Exists'});
        }else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar, 
                password: req.body.password
            });

            // Encrypt password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));

                });
            });
        }
    
    });
});

// @route   GET api/users/login
// @desc    Login a user
// @access  Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find user in DB by email address
    User.findOne({email})
    .then(user => {
        // Check if user exists
        if(!user){
            return res.status(404).json({email: 'User Not Found'});
        }
        // Check user password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch){
                // User Matched

                // Create Jwt payload ADD AVATAR later
                const payload = {id: user.id, name: user.name, avatar: user.avatar};



                // Sign Token
                jwt.sign(payload, key, {expiresIn: 3600}, (err, token) => {
                    res.json({success: true, token: 'Bearer ' + token})
                });
            } else {
                return res.status(400).json({ password: 'Incorrect Password' });
            }
        })
    });
});

module.exports = router;