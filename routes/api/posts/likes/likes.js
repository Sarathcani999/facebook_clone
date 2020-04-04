const router = require('express').Router()
const auth = require('../../../middleware/auth')

// User Model
const Like = require('../../../../models/Likes')

// @route GET api/posts/likes
// @desc Get all likes of a post
// @access private
router.get('/:id' , auth , (req,res) => {

    Like
    .find({ post_id : req.params.id })
        .sort({
            created_at : -1
        })
        .then(likes => res.json(likes))
        .catch(err => res.json({
            "message" : err.message
        }))
})

// @route POST api/posts/likes
// @desc Like a post
// @access private
router.post('/' , auth , (req,res) => {
    console.log("IN POST LIKES ROUTE")
    Like.find({
        user_id : req.user._id,
        post_id : req.body.post_id
    })
        .then(likes => {
            if (likes.length === 0) {
                const newLike = new Like({
                    user_id : req.user._id,
                    post_id : req.body.post_id
                })
            
                newLike.save()
                    .then(like => res.status(201).json(like))
            } else {
                return res.status(400).json({
                    "message" : "Already Liked"
                })
            }
        })
        .catch(err => res.json({
            "message" : err.message
        }))
    
    
})

// @route DELETE api/posts/likes/:id
// @desc Delete a like of a post
// @access private
router.delete('/:id' , auth , (req,res) => {

    Like.findOne({post_id : req.params.id , user_id : req.user._id})
        .then(like => {
            if(like !== null) {
                like.remove()
                                .then(() => res.json({"id" : like._id}))
            } else {
                res.status(404).json({message : "Not Liked this post"})
            }
        }).catch(err => res.status(404).json({ success : false , message : err.message})) 
})

module.exports = router