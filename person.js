const mongoose = require('mongoose')
const validator = require('validator')

const Person = new mongoose.model('Person', {
    name : {
        type : String,
        trim : true,
        required : true,
    },
    age : {
        type : Number,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        },
        required : true,
    },
    city : {
        type : String,
        trim : true
    },
    gender : {
        type : String,
        enum : ['M', 'F'],
    }

})

module.exports = Person