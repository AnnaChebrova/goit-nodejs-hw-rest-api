const contactsOperations = require('../../model/contacts')

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.getAll()
    res.json(contacts)
  } catch (error) {
    next(error)
  }
}
module.exports = getAll
