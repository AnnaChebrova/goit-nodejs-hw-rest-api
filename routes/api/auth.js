const express = require('express')
const { validation, controllerWrapper, authenticate } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiUserSchema } = require('../../model/user')

const router = express.Router()

router.post(
  '/register',
  validation(joiUserSchema),
  controllerWrapper(ctrl.register),
)

router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.login))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

module.exports = router
