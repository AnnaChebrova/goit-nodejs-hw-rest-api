const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/contacts')

const remoweById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.removeById(id)
    if (!result) {
      throw new NotFound(`Contact with id=${id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'Remove success',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = remoweById
