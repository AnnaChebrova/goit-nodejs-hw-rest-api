const contactsOperations = require('../../model/contacts')
const add = async (req, res, next) => {
  try {
    const result = await contactsOperations.add(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}
module.exports = add
