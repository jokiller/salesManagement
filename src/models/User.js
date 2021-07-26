const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if(value.toLowerCase().includes('password')) {
        throw new Error('password can not cantain "password" ')
      }
    }
  }
},{
    timestamps: true,
})

const User = mongoose.model('user', userSchema)

module.exports = User