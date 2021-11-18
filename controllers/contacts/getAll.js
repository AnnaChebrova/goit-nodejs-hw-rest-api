const { ContactModel } = require('../../model')

const getAll = async (req, res) => {
  const result = await ContactModel.find({})
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}
module.exports = getAll
