
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        require : true,
        type  : String
    },
    email : {
        require : true,
        type : String
    },
    password : {
        require : true,
        type : String
    },
    admin : {
        require : true,
       type : Boolean
    }
})

module.exports = mongoose.model('users',userSchema)