const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        require : [true , "Please add the user name"],
        unique : [true , "Username Already Taken"]
    }, 
    email : {
        type : String,
        require : [true , "Please add the email"],
        unique : [true , "Email already exists"]
    },
    password : {
        type : String,
        require : [true , "Please enter the user password"]
    }
} , {
    timestamps : true
});

module.exports = mongoose.model("User" , userSchema);