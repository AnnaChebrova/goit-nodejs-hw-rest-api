const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/contacts')

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.getById(id)
    if (!result) {
      throw new NotFound(`Contact with id=${id} not found`)
      // const error = new Error(`Contact with id=${id} not found`)
      // error.status = 404
      // throw error

      // // res.status(404).json({
      //   status: 'error',
      //   code: 404,
      //   message: `Contact with id=${id} not found`
      // })
      // return
    }
    res.json({
      status: 'success',
      code: 200,
      data: { result },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getById
