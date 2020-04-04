const router = require('express').Router()
const auth = require('../../middleware/auth')

// User Model
const Post = require('../../../models/Posts')

// @route GET api/posts
// @desc Get all posts
// @access public
router.get('/' , auth , (req,res) => {
    // Post.find().where('_id').in(ids).exec((err, records) => {});

    Post.find()
        .sort({
            created_at : -1
        })
        .then(posts => res.json(posts))
        .catch(err => res.json({
            "message" : err.message
        }))
})

// @route POST api/posts
// @desc Create an post
// @access private
router.post('/' , auth , (req,res) => {
    
    const newPost = new Post({
        created_by : req.user._id,
        body : req.body.body
    })

    newPost.save()
        .then(post => res.status(201).json(post))

})

// @route DELETE api/posts/:id
// @desc Delete an post
// @access private
router.delete('/:id' , auth , (req,res) => {

    Post.findOne({_id : req.params.id , created_by : req.user._id})
    .then(post => {
        if(post !== null) {
            post.remove()
                            .then(() => res.json({"id" : post._id}))
        } else {
            res.status(404).json({message : "No Post with this id"})
        }
    }).catch(err => res.status(404).json({ success : false , message : err.message}))

        
})

module.exports = router