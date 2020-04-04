const post = require('./CollectionNames').post
const user = require('./CollectionNames').user


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    created_by : {
        type : Schema.Types.ObjectId, 
        ref: user ,
        required : true
    } ,
    body : {
        type : String ,
        default : ''
    } ,
    created_at : {
        type : Date ,
        default : Date.now
    } ,
    privacy : {
        type : Number ,
        default : 1 // Means Public
    }
});


module.exports = Posts = mongoose.model(post , PostSchema)