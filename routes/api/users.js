/*
@docs

In this file we define three routes
    1 . Register :
            @route POST api/users
            @desc Register a user
            @access Public (protected by noAuth) 
            @Workflow : 
                a. Simple validation to check whether all fields are present (eg. name , password , username). If any one is not present then you have to return back a response with 400 (Bad Request) status code
                b. Check if there is a user with existing username then return back a response with 400 (Bad Request) status code
                c. Hash the password and then add the user to the database . If successful ,
                        Create a token by using { user._id } if successful then return back { token , user : { user.id , user.name , user.username } }
    2 . Login :
            @route POST api/users
            @desc Login user
            @access Public
            @Workflow :
                a. Simple validation
                b. Checks if there is a user with existing username
                c. If present then compares the password
                d. IF match found return back a token and user details
    3 . Get User Details :
            @route GET api/users
            @desc Get user
            @access Private
            @Workflow :
                a. Search database and return the user back

*/
const config = require('../../config/keys')
const bcrypt = require('bcryptjs')
const router = require('express').Router();
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
// const deletePassword = require('../../Testing/test')

// User Model
const User = require('../../models/Users')

// @route POST api/auth/Login
// @desc Login user
// @access Public
router.post('/Login' , (req,res) => {
    // Simple Validation
    let {username , password} = req.body
    if (!username || !password) return res.status(400).json({"message" : "Credentials are not present"})
    User.findOne({username}).then((user) => {


        if (!user){
            // return res.status(400).json({"message" : "No User Found"})
            return res.status(400).json({
                "message" : "No User Found"
            })
        }

        bcrypt.compare(password,user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({"message" : "Wrong Pass"})
                
                jwt.sign({ _id : user._id }, config.jwt , (err , token) => {
                    
                    if (err) throw err

                    // deletePassword(JSON.stringify(user))
                    user.password = null

                    res.status(200).json({
                        token ,
                        user 
                    })
                })
            })
            .catch(err => {
                
                res.status(400).json({"message" : err.message, "from" : "bcrypt"})
            })
    })
    .catch(err => res.status(400).json({"message" : err.message , "from" : "findone"}))
})

// @route POST api/auth/Register
// @desc Register a User
// @access Public                   #change to notAuth
router.post('/Register' , (req,res) => {

    // Simple Validation
    let userdata =  req.body
    let {username , name , password } = userdata
    if (!username || !password || !name) {
        return res.status(400).json({
            "message" : "Credentials are not present"
        })
    }

    // Check if the username already present
    User.findOne({username})
        .then(user => {
            if(user) {
                return res.status(400).json({
                    "message" : "Duplicate User"
                })
            }

            bcrypt.hash(password, 10, function(err, hash) {
                
                if(err) throw err
                
                // Store hash in database
                userdata.password  = hash
                var newUser = new User(userdata)
                newUser.save()
                    .then(user => {
                        jwt.sign({ _id : user._id }, config.jwt , (err , token) => {
                            if (err) throw err

                            delete user['password']

                            res.status(201).json({
                                token ,
                                user
                            })
                        })
                    })
                    .catch(err => res.status(500).json({
                        "message" : err.message
                    }))
              });
            
        })
})

// @route GET api/auth/user
// @desc Get a User Details
// @access Private
router.get('/user' , auth , (req,res) => {
    User.findById(req.user._id)
        .select('-password')
        .then(user => res.json(user))
})

// @route GET api/auth/:id
// @desc Get a User Profile
// @access Public
router.get('/:id' , (req,res) => {

    User.findOne({_id : req.params.id})
        .select('-password -followers -following')
        .then(user => res.json(user))
        .catch(err => err.message)
})

// @route POST api/auth/followUser
// @desc Follow a user
// @access Private
router.post('/followUser' , auth , (req,res) => {
    let id_of_user_to_be_followed = req.body.user_id


})

module.exports = router