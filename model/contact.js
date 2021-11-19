const { Schema, model } = require('mongoose')
const Joi = require('joi')
const patternRegExp = /^[0-9]{10}$/

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
    match: patternRegExp,
  },
})

const joiContactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(patternRegExp),
})

const ContactModel = model('contact', contactSchema)

module.exports = {
  ContactModel,
  joiContactsSchema,
}
