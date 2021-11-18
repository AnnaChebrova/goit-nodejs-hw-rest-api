const { NotFound } = require('http-errors')
const { ContactModel } = require('../../model')

const remoweById = async (req, res) => {
  const { id } = req.params
  const result = await ContactModel.findByIdAndRemove(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Remove success',
  })
}

module.exports = remoweById
