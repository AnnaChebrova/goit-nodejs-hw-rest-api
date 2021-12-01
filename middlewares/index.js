const validation = require('./validation')
const controllerWrapper = require('./controllerWrapper')

const joiContactsSchema = require('./validation')

const authenticate = require('./authenticate')
const upload = require('./upload')

module.exports = {
  validation,
  controllerWrapper,
  joiContactsSchema,
  authenticate,
  upload,
}
