const mongoose = require('mongoose')
const {ObjectId} = mongoose.Types

const userSchma = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

const goalSchema =  new mongoose.Schema({

    username:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"usercollection",
      required:true  
    },
    goal:{
        type:String,
    
    }
})

const userModel = mongoose.model('usercollection',userSchma)
const goalModel = mongoose.model('goalcollection',goalSchema)

module.exports = {
    userModel,goalModel,ObjectId
}