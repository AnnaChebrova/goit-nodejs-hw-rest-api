const { ContactModel } = require('../../model')

const getAll = async (req, res) => {
  const { _id } = req.user
  console.log(_id)

  const result = await ContactModel.find({ owner: _id }).populate(
    'owner',
    '_id email',
  )
  console.log(result)

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}
module.exports = getAll
