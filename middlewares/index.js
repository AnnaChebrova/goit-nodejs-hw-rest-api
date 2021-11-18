const validation = require('./validation')
const controllerWrapper = require('./controllerWrapper')

const joiContactsSchema = require('./addContactValidation')

module.exports = {
  validation,
  controllerWrapper,
  joiContactsSchema,
}
