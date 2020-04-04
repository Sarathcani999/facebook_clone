const post = require('./CollectionNames').post
const user = require('./CollectionNames').user
const like = require('./CollectionNames').like


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    user_id : {
        type : Schema.Types.ObjectId, 
        ref: user ,
        required : true
    } ,
    post_id : {
        type : Schema.Types.ObjectId, 
        ref: post ,
        required : true
    } ,
    created_at : {
        type : Date ,
        default : Date.now
    }
});


module.exports = Likes = mongoose.model(like , LikeSchema)