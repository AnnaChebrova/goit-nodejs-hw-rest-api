const { NotFound } = require('http-errors')
const { ContactModel } = require('../../model')

const updateById = async (req, res) => {
  const { id } = req.params
  const result = await ContactModel.findByIdAndUpdate(id, req.body, {
    new: true,
  })
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
}

module.exports = updateById
