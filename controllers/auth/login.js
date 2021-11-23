const { NotFound } = require('http-errors')
const { User } = require('../../model')

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw new NotFound(`User with email=${email} not found`)
  }
  console.log(user.password)
}

module.exports = login
