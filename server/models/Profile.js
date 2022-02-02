const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        maxlength:32,
        trim:true,   
    },
    lastName: {
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
    description: {
        type:String,
    },
    availability:{
        type:[String],
    },
    profilePic: {
        type:String,
    }

});


module.exports = Profile = mongoose.model("profile", profileSchema);
