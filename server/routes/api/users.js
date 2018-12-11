const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

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
               // avatar, TO be added later
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

module.exports = router;