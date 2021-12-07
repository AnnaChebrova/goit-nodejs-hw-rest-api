const gravatar = require('gravatar')
const fs = require('fs/promises')
const path = require('path')

const { ContactModel } = require('../../model')
const contactsDir = path.join(__dirname, '../../public/contacts')

const add = async (req, res) => {
  const image = gravatar.url('Anna@ukr.net')
  const newContact = { ...req.body, owner: req.user._id, image }
  const result = await ContactModel.create(newContact)
  const contactFolder = path.join(contactsDir, String(result._id))
  await fs.mkdir(contactFolder)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  })
}

module.exports = add
