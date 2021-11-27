const gravatar = require('gravatar')

const { ContactModel } = require('../../model')

const add = async (req, res) => {
  const image = gravatar.url('anna@gmail.com')
  const newContact = { ...req.body, owner: req.user._id }
  const result = await ContactModel.create(newContact, image)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  })
}

module.exports = add
