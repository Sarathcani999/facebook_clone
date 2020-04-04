const user = require('./CollectionNames').user

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type : String ,
        required : true
    } ,
    password : {
        type : String ,
        required : true
    } ,
    name : {
        type : String ,
        required : true
    } ,
    occupation : {
        type : String ,
        default : "Student"
    } ,
    city : {
        type:  String ,
        default : "Ernakulam"
    } ,
    bio : {
        type : String
    } ,
    followers : [{ type: Schema.Types.ObjectId, ref: user }] ,
    following : [{ type: Schema.Types.ObjectId, ref: user }]
});


module.exports = Users = mongoose.model(user , UserSchema)