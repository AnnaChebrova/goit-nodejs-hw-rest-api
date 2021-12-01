const gravatar = require('gravatar')

const { ContactModel } = require('../../model')

const add = async (req, res) => {
  const image = gravatar.url('Anna@ukr.net')
  const newContact = { ...req.body, owner: req.user._id, image }
  const result = await ContactModel.create(newContact)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  })
}

module.exports = add
