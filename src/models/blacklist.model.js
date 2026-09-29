const mongoose = require("mongoose")


const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required: [true, "Token is required to be added in blacklist"]
    }
},
{timestamps:true})


const tokenBlacklist = mongoose.model("tokenBlacklists",blacklistTokenSchema)

module.exports = tokenBlacklist