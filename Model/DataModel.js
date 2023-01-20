const mongoose=require('mongoose')


const dataSchema= mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

const DataModel=mongoose.model("Data", dataSchema)

module.exports=DataModel