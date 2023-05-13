const mongoose = require('mongoose')

const userModal = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports = mongoose.model('users',userModal)