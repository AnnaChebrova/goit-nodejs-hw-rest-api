const express = require('express')
const { contacts: ctrl } = require('../../controllers')

const {
  validation,
  authenticate,
  controllerWrapper,
  upload,
} = require('../../middlewares')

const { joiContactsSchema } = require('../../model/contact')

const router = express.Router()

router.get('/', authenticate, controllerWrapper(ctrl.getAll))

router.get('/:id', authenticate, controllerWrapper(ctrl.getById))

router.post(
  '/',
  authenticate,
  validation(joiContactsSchema),
  controllerWrapper(ctrl.add),
)

router.put(
  '/:id',
  authenticate,
  validation(joiContactsSchema),
  controllerWrapper(ctrl.updateById),
)

router.patch('/:id/image', upload.single('image'), controllerWrapper(ctrl.updateImage))

router.delete('/:id', controllerWrapper(ctrl.remoweById))

module.exports = router
