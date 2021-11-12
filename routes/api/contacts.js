const express = require('express')
const { contacts: ctrl } = require('../../controllers')

const { joiContactsSchema, validation } = require('../../middlewares')

const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', validation(joiContactsSchema), ctrl.add)

router.put('/:id', validation(joiContactsSchema), ctrl.updateById)

router.delete('/:id', ctrl.remoweById)

module.exports = router
