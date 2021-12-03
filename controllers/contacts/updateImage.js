const fs = require('fs/promises')
const path = require('path')
const { NotFound } = require('http-errors')
const { ContactModel } = require('../../model')

const contactsDir = path.join(__dirname, '../../public/contacts')
console.log(contactsDir)

const updateImage = async (req, res) => {
  const { id } = req.params
  const { path: tempUpload, originalname } = req.file

  try {
    const resultUpload = path.join(contactsDir, id, `${id}_${originalname}`)
    await fs.rename(tempUpload, resultUpload)
    const image = path.join('/contacts', id, `${id}_${originalname}`)
    const result = await ContactModel.findByIdAndUpdate(
      id,
      { image },
      { new: true },
    )
    if (!result) {
      throw new NotFound(`Contact with id=${id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    })
  } catch (error) {
    await fs.unlink(tempUpload)
    throw error
  }
}

module.exports = updateImage
