const Joi = require('joi')
const joiContactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
})

module.exports = joiContactsSchema
