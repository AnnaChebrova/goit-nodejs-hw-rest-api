const { Conflict } = require('http-errors')

const { UserModel } = require('../../model')

const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (user) {
    throw new Conflict(`User with email=${email} already exist`)
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  const newUser = await UserModel.create({ email, password: hashPassword })
  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Register success',
  })
}

module.exports = register
