const express = require('express')
const { contacts: ctrl } = require('../../controllers')

const { validation, controllerWrapper } = require('../../middlewares')

const { joiContactsSchema } = require('../../model/contact')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:id', controllerWrapper(ctrl.getById))

router.post('/', validation(joiContactsSchema), controllerWrapper(ctrl.add))

router.put(
  '/:id',
  validation(joiContactsSchema),
  controllerWrapper(ctrl.updateById),
)

router.delete('/:id', controllerWrapper(ctrl.remoweById))

module.exports = router
