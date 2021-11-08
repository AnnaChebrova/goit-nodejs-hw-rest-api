const getAll = require('./getAll')

const getById = async (id) => {
  const contacts = await getAll()
  const result = contacts.find((c) => String(c.id) === String(id))
  // console.log(id);

  if (!result) {
    return null
  }

  return result
}

module.exports = getById
