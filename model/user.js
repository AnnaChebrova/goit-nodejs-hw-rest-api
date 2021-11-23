const { Schema, model } = require('mongoose')
const Joi = require('joi')

// const patternRegExp = /^[0-9]{10}$/

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { versionKey: false, timestamps: true },
)

const joiUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
})

const UserModel = model('user', userSchema)

module.exports = {
  UserModel,
  joiUserSchema,
}
